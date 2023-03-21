import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Eliminar los campos que no estan en el DTO
      whitelist: true,
      // Enviar un error si se envia un campo que no esta en el DTO
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
  // Todo: Remove in production
  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
