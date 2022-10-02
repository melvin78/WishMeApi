import { Router } from 'express';
import BirthdayInfoController from "@controllers/birthday-info.controller";
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BirthdayInfoRoutes implements Routes {
  public path = '/birthday-info';
  public router = Router();
  public birthdayInfoController = new BirthdayInfoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.birthdayInfoController.getBirthdayInfos);

  }
}

export default BirthdayInfoRoutes;
