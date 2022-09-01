import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello() {
    console.log('CALLING APP1');
    const resp = await this.httpService
      .get(process.env.APP1 || 'http://localhost:3001')
      .toPromise();

    return resp.data;
  }
}
