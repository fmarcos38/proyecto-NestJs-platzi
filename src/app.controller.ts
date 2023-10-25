import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';





@Controller()//especifico q este arch es un controlador
export class AppController {
  constructor(private readonly appService: AppService) {}  
  
}
