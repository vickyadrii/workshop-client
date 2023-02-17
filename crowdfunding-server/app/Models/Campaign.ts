import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Donation from "./Donation";

export default class Campaign extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public content: string;

  @column()
  public target: number;

  @column()
  public targetDate: string;

  @column()
  public userId: number;

  @hasMany(() => Donation)
  public donations: HasMany<typeof Donation>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
