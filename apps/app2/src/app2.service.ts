import { Injectable } from '@nestjs/common';

@Injectable()
export class App2Service {
  getHello() {
    console.log("I'M APP2");

    return 'Hello from App2!';
  }
}
