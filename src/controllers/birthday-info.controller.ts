import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/users.interface';
import {BirthdayInfoInterface} from "@interfaces/birthday-info.interface";
import BirthdayInfoService from "@services/birthday-info.service";

class BirthdayInfoController {
  public birthDayInfoService = new BirthdayInfoService();

  public getBirthdayInfos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBirthdayInfo: BirthdayInfoInterface[] = await this.birthDayInfoService.findAllBirthdayInfo();

      res.status(200).json({ data: findAllBirthdayInfo, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  // public getUserById = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const findOneUserData: User = await this.birthDayInfoService.findUserById(userId);
  //
  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  //
  // public createUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: CreateUserDto = req.body;
  //     const createUserData: User = await this.birthDayInfoService.createUser(userData);
  //
  //     res.status(201).json({ data: createUserData, message: 'created' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  //
  // public updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const userData: CreateUserDto = req.body;
  //     const updateUserData: User = await this.birthDayInfoService.updateUser(userId, userData);
  //
  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const deleteUserData: User = await this.birthDayInfoService.deleteUser(userId);
  //
  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default BirthdayInfoController;
