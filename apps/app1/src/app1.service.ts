import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class App1Service {
  constructor(private readonly httpService: HttpService) {}

  async getHello() {
    console.log('CALLING APP2');

    const resp = await this.httpService
      .get(process.env.APP2 || 'http://localhost:3002')
      .toPromise();

    return resp.data;
  }
}
