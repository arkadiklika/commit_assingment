import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserEntity } from '../user.entity';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';

export interface ExpressRequest extends Request {
  user?: UserEntity;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    if (!req.headers['authorization']) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers['authorization'].split(' ')[1];

    try {
      const decode = verify(token, process.env.JWT_TOKEN) as {
        username: string;
      };

      const user = await this.userService.findByUserName(decode.username);
      req.user = user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
