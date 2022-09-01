import { Controller, Get } from '@nestjs/common';
import { App1Service } from './app1.service';

@Controller()
export class App1Controller {
  constructor(private readonly app1Service: App1Service) {}

  @Get()
  async getHello() {
    return await this.app1Service.getHello();
  }
}
