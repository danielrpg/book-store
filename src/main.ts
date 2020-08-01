import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
              .setTitle('Book Store')
              .setDescription('The Book Store')
              .setVersion('1.0.0')
              .addBearerAuth(
                { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
                'access-token',
              )
              .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);

  await app.listen(3000);
}
bootstrap();
