import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'
import * as path from 'path'

@Injectable()
export class StaticMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        if (!req.baseUrl.includes('/api/') && !req.baseUrl.includes('/dist/') && !req.baseUrl.includes('.ico') ) {
            return res.sendFile(path.resolve('../browser/index.html'))
        }
        next()
    }
}