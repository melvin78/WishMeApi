import { hash } from "bcrypt";
import { CreateUserDto } from "@dtos/users.dto";
import { HttpException } from "@exceptions/HttpException";
import { User } from "@interfaces/users.interface";
import {BirthdayInfoInterface} from  "@interfaces/birthday-info.interface";
import { isEmpty } from "@utils/util";
import birthdayInfoModel from "@models/birthday-info.model";

class BirthdayInfoService {
  // public users = birthdayInfoModel;

  public async findAllBirthdayInfo(): Promise<BirthdayInfoInterface[]> {
    return birthdayInfoModel.find();
  }

  public async findBirthdayInfoByDateAndMonth(date: number, month: string): Promise<BirthdayInfoInterface> {
    if (isEmpty(date)) throw new HttpException(400, "Date is empty");

    if (isEmpty(month)) throw new HttpException(400, "Month is empty");

    const findBirthdayInfo: BirthdayInfoInterface = await birthdayInfoModel.findOne({ date: date,month:month });
    if (!findBirthdayInfo) throw new HttpException(409, "Month and date does not exist");

    return findBirthdayInfo;
  }

  // public async createUser(userData: CreateUserDto): Promise<BirthdayInfoInterface> {
  //   if (isEmpty(userData)) throw new HttpException(400, "userData is empty");
  //
  //   const findBirthdayInfo: BirthdayInfoInterface = await birthdayInfoModel.findOne({ email: userData.email });
  //   if (findBirthdayInfo) throw new HttpException(409, `This email ${userData.email} already exists`);
  //
  //   const hashedPassword = await hash(userData.password, 10);
  //   const createUserData: BirthdayInfoInterface = await birthdayInfoModel.create({ ...userData, password: hashedPassword });
  //
  //   return createUserData;
  // }

  public async updateUser(userId: string, userData: CreateUserDto): Promise<BirthdayInfoInterface> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    if (userData.email) {
      const findBirthdayInfo: User = await birthdayInfoModel.findOne({ email: userData.email });
      if (findBirthdayInfo && findBirthdayInfo._id != userId) throw new HttpException(409, `This email ${userData.email} already exists`);
    }

    if (userData.password) {
      const hashedPassword = await hash(userData.password, 10);
      userData = { ...userData, password: hashedPassword };
    }

    const updateUserById: BirthdayInfoInterface = await birthdayInfoModel.findByIdAndUpdate(userId, { userData });
    if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<BirthdayInfoInterface> {
    const deleteUserById: BirthdayInfoInterface = await birthdayInfoModel.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

    return deleteUserById;
  }
}

export default BirthdayInfoService;
