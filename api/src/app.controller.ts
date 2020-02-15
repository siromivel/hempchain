import { Controller, Get, Res } from '@nestjs/common'
import { AppService } from './app.service'
import * as path from 'path'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res): void {
    res.sendFile(path.resolve('../browser/index.html'))
  }

  @Get('/dist/bundle.js')
  bundle(@Res() res): void {
    res.sendFile(path.resolve('../browser/dist/bundle.js'))
  }
}
