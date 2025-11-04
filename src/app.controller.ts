import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import os from 'os';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  getPing() {
    const now = new Date();
    console.log('Ping received at:', now.toISOString());

    return {
      message: 'pong',
      from: os.hostname(), // tên container (app1/app2/app3)
      time: now.toISOString(),
    };
  }
}
