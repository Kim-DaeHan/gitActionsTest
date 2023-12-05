import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  console.log("start");
  console.log("test");
  const mongodbUri = process.env.MONGODB_URI;
  console.log(`Connected to MongoDB at: ${mongodbUri}`);
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(3000);
}

bootstrap();
