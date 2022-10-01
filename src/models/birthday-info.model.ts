import { prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";

class Celeb {
  @prop({ type: String, required: true })
  public type: string;

  @prop({ type: String, required: true })
  public celeb_birthyear: string;

  @prop({ type: String, required: true })
  public celeb_description: string;

  @prop({ type: String, required: true })
  public celeb_bio: string;

}


class Event {
  @prop({ type: String, required: true })
  public event_year: string;

  @prop({ type: String, required: true })
  public event_title: string;

  @prop({ type: String, required: true })
  public event_description: string;


}



@modelOptions({ schemaOptions: { collection: 'main_dates', timestamps: true } })
class BirthDayInfo {
  @prop({ type: String, required: true, unique: true })
  public id: number;

  @prop({ type: String, required: true })
  public month: string;

  public date: number;

  // required field, with empty array by default.
  @prop({ ref: () => Celeb })
  public celebs?: Ref<Celeb>[];

  @prop({ ref: () => Event })
  public events?: Ref<Event>[];

}

const birthDayInfoModel = getModelForClass(BirthDayInfo);

export default birthDayInfoModel;
