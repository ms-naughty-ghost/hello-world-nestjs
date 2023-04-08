import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Helmet is a collection of 14 smaller middleware functions that set HTTP response headers
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
