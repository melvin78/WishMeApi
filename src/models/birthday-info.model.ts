import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";



class Events {
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

  @prop({ type: Number, required: true })
  public date: Number;


}

const birthDayInfoModel = getModelForClass(BirthDayInfo);

export default birthDayInfoModel;
