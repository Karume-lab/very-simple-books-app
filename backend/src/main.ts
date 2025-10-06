import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { AppModule } from './app.module';
import { HumanReadableValidationPipe } from './common/pipes/human-readable-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new HumanReadableValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Very Simple Books API')
    .setDescription('A simple books API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  app.use('/api/swagger-json', (_: Request, res: Response) => {
    res.json(document);
  });

  await app.listen(3000);
  console.log(`🚀 Server ready at http://localhost:3000`);
  console.log(`📘 Swagger UI: http://localhost:3000/api/docs`);
  console.log(`📄 OpenAPI JSON: http://localhost:3000/api/swagger-json`);
}

void bootstrap();
