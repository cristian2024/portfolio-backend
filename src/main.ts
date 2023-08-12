import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // const connectionRoute = getDbConnectionRoute();
  // await mongoose.connect(connectionRoute);
  await app.listen(config().port);
}
bootstrap();
