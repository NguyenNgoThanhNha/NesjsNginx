import { Injectable } from '@nestjs/common';
import { BaseResponse } from './base-response';
import { PrismaClient  } from '@prisma/client'

@Injectable()
export class AppService {
  getHello(): any {
    const a = 10;
    let b = 5;
    b = a;

    return new BaseResponse("hello world", 'call api thành công', 0);
  }
}
