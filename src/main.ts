import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //con este atributo, me aseguro de q no puedan mandar EN mi body parametros de mas.
      forbidNonWhitelisted: true, //con este Envia un msj alertando del error, el anterior NO alerta, lo ignora
    }),
  );
  await app.listen(3000);
}
bootstrap();
