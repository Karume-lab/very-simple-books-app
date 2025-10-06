import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'node:fs';
import { AppModule } from '../app.module';

async function generateSwaggerJSON() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Very Simple Books API')
    .setDescription('OpenAPI schema generated via NestJS + Swagger')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('./swagger.json', JSON.stringify(document, null, 2));
  await app.close();
  console.log('✅ OpenAPI spec exported to swagger.json');
}

void generateSwaggerJSON();
