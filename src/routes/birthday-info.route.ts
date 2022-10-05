import { Router } from 'express';
import BirthdayInfoController from "@controllers/birthday-info.controller";
import { Routes } from '@interfaces/routes.interface';

class BirthdayInfoRoutes implements Routes {
  public path = '/birthday-info';
  public router = Router();
  public birthdayInfoController = new BirthdayInfoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.birthdayInfoController.getBirthdayInfos);
    this.router.get(`${this.path}/:date/:month`, this.birthdayInfoController.getBirthdayInfoByDateAndMonth);


  }
}

export default BirthdayInfoRoutes;
