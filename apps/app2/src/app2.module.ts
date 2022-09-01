import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { App2Controller } from './app2.controller';
import { App2Service } from './app2.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [App2Controller],
  providers: [App2Service],
})
export class App2Module {}
