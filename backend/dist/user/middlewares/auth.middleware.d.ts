import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserEntity } from '../user.entity';
import { UserService } from '../user.service';
export interface ExpressRequest extends Request {
    user?: UserEntity;
}
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    use(req: ExpressRequest, res: Response, next: NextFunction): Promise<void>;
}
