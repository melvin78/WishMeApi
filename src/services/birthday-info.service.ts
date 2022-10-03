import { hash } from "bcrypt";
import { HttpException } from "@exceptions/HttpException";
import {BirthdayInfoInterface} from  "@interfaces/birthday-info.interface";
import { isEmpty } from "@utils/util";
import birthdayInfoModel from "@models/birthday-info.model";

class BirthdayInfoService {
  // public users = birthdayInfoModel;

  public async findAllBirthdayInfo(): Promise<BirthdayInfoInterface[]> {
    return birthdayInfoModel.find();
  }

  public async findBirthdayInfoByDateAndMonth(date: Number, month: string): Promise<BirthdayInfoInterface> {
    if (isEmpty(date)) throw new HttpException(400, "Date is empty");

    if (isEmpty(month)) throw new HttpException(400, "Month is empty");

    console.log(date)

    const findBirthdayInfo: BirthdayInfoInterface = await birthdayInfoModel.findOne({ month:month ,date:date});
    if (!findBirthdayInfo) throw new HttpException(409, "Month and date does not exist");

    return findBirthdayInfo;
  }



}

export default BirthdayInfoService;
