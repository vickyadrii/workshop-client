import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Campaign from "App/Models/Campaign";
import { schema } from "@ioc:Adonis/Core/Validator";
import { AddCampaignPayload } from "App/Types/campaign";
import Logger from "@ioc:Adonis/Core/Logger";
import UserMapper from "App/Mapper/UserMapper";

export default class CampaignsController {
  public async index({ }: HttpContextContract) {
    const result = await Campaign.query().preload("donations");

    const campaigns = result.map((res) => {
      const current_donation = res.donations.reduce((x, a) => x + a.total, 0);
      return {
        ...res.$original,
        current_donation,
        isCompleted: current_donation >= res.target,
      };
    });

    return campaigns;
  }

  public async view({ params }: HttpContextContract) {
    const { id } = params;

    const campaign = await Campaign.query()
      .where("id", id)
      .preload("donations")
      .firstOrFail();

    const current_donation = campaign.donations.reduce(
      (x, a) => x + a.total,
      0
    );
    return {
      ...campaign.$original,
      current_donation,
      isCompleted: current_donation >= campaign.target,
    };
  }

  public async create({ request, auth }: HttpContextContract) {
    const userId = auth.user?.id;

    const validatorSchema = schema.create({
      title: schema.string(),
      content: schema.string(),
      target: schema.number(),
      targetDate: schema.string(),
    });

    const { title, content, target, targetDate } = await request.validate({
      schema: validatorSchema,
    });

    const payload: AddCampaignPayload = {
      userId: userId!,
      title,
      content,
      target,
      targetDate,
    };

    try {
      const campaign = await Campaign.create({
        ...payload,
      });

      return campaign;
    } catch (err) {
      Logger.error(err);
      console.log(err);
    }
  }
}
