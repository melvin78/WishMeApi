import { NextFunction, Request, Response } from 'express';
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

  public getBirthdayInfoByDateAndMonth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const date: number = parseInt(req.params.date);
      const month : string = req.params.month;



      const findOneBirthdayInfoData: BirthdayInfoInterface = await this.birthDayInfoService.findBirthdayInfoByDateAndMonth(date,month);

      res.status(200).json({ data: findOneBirthdayInfoData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

}

export default BirthdayInfoController;
