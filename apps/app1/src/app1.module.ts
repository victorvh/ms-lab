import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [App1Controller],
  providers: [App1Service],
})
export class App1Module {}
