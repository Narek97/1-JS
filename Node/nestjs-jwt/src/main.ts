import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //validacian ashxatachnelu hamar
  app.useGlobalPipes(
    new ValidationPipe({
      //en dashtery voronq dto um chkan baych miamit galis en jnjven
      whitelist: true,
    }),
  );
  await app.listen(5000);
}
bootstrap();
