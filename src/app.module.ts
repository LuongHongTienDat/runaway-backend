import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [ LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
