import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTubes(): string {
    return 'more tubes, obviously'
  }
}
