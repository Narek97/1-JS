import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser('') user: User) {
    return user;
  }
  //stugum enq te usery token uni te che
  // stuguma jwt stratejum -AuthGuard meji jwt anuny difolta ete uzum enq poxen piti strateji mej poxenq
}
