import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import { AddDonationPayload } from "App/Types/donation";
import { schema } from "@ioc:Adonis/Core/Validator";
import Donation from "App/Models/Donation";

export default class DonationsController {
  public async create({ response, auth, request }: HttpContextContract) {
    const userId = auth.user?.id;

    const validatorSchema = schema.create({
      total: schema.number(),
      campaignId: schema.number(),
    });

    const { total, campaignId } = await request.validate({
      schema: validatorSchema,
    });

    const payload: AddDonationPayload = {
      userId: userId!,
      total,
      campaignId,
    };

    try {
      const result = await Donation.create(payload);
      return response.ok(result);
    } catch (error) {
      console.log(error);
    }
  }
}
