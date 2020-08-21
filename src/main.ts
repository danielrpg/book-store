import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");

  const options = new DocumentBuilder()
    .setTitle("Book Store")
    .setDescription("The Book Store")
    .setVersion("1.0.0")
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "Token" },
      "access-token",
    )
    .build();

  const cors = {
    origin: [
      "http://localhost:3000",
      "http://localhost:5030",
      "http://localhost",
      "*",
    ],
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: [
      "Accept",
      "Content-Type",
      "Authorization",
    ],
  };
  app.enableCors(cors);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api/v1", app, document);

  await app.listen(4000);
}
bootstrap();
