import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { LogModel } from './logs.model';
import { HttpException,HttpStatus} from '@nestjs/common';
@Injectable()
export class LogsService {
  counter = 2;
  private logs: LogModel[] = [new LogModel(1,"TP HCM",1000),new LogModel(2,"HN",4000)]
  
  create(createLogDto: CreateLogDto) {
    if (!createLogDto.location || !createLogDto.distance){
        throw new HttpException('Lack information', HttpStatus.BAD_REQUEST);
    }
    this.logs.push(new LogModel(++this.counter, createLogDto.location, Number(createLogDto.distance)));
    return this.logs.at(-1)
  }

  findAll() {
    return [...this.logs];
  }

  findOne(id: number) {
    let x = this.logs.filter((x)=>id == x.id) ;
    if (x.length == 0){
        throw new HttpException('Cannot find record', HttpStatus.BAD_REQUEST);
    }
    return x[0];
  }

  update(id: number, updateLogDto: UpdateLogDto) {
      let x = this.findOne(id)
      if (updateLogDto.location){
          x.location = updateLogDto.location
      }
      if (updateLogDto.distance){
          x.distance = Number(updateLogDto.distance)
      }
      return x
  }

  remove(id: number) {
      let x = this.logs.findIndex((obj) => obj.id === id)
      if (x==-1) {
        throw new HttpException('Cannot find record', HttpStatus.BAD_REQUEST);
      }
      this.logs.splice(x, 1);
      return {
          msg: "Removed successfully"
      }
  }
}
