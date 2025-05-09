import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const APP_PORT = Number(process.env['APP_PORT']) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
}

void bootstrap();
