import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";
import { LoginPayload, RegisterPayload } from "App/Types/auth";
import Logger from "@ioc:Adonis/Core/Logger";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const schemaValidator = schema.create({
      email: schema.string(),
      password: schema.string(),
    });

    const payload: LoginPayload = await request.validate({
      schema: schemaValidator,
    });

    try {
      const token = await auth
        .use("api")
        .attempt(payload.email, payload.password, {
          expiresIn: "3 days",
        });
      return token;
    } catch (err) {
      Logger.error(err);
      return response.unauthorized("Invalid credentials");
    }
  }

  public async register({ auth, request, response }: HttpContextContract) {
    const schemaValidator = schema.create({
      fullname: schema.string(),
      email: schema.string(),
      password: schema.string(),
    });

    const payload: RegisterPayload = await request.validate({
      schema: schemaValidator,
    });

    try {
      await User.create(payload);

      const token = await auth
        .use("api")
        .attempt(payload.email, payload.password, {
          expiresIn: "3 days",
        });
      return token;
    } catch (err) {
      Logger.error(err);
      return response.internalServerError({ err });
    }
  }
}
