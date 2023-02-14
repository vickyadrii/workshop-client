import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import { LoginPayload } from "App/Types/auth";

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
      return response.unauthorized("Invalid credentials");
    }
  }
}
