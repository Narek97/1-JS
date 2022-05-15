import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//Global vor amen angam urish modulnerum import chanenq servichy ogtagortelu hamar
@Global()
@Module({
  providers: [PrismaService],
  //vor urish texer karananq iran ogtagortenq
  exports: [PrismaService],
})
export class PrismaModule {}
