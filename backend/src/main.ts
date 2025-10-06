import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HumanReadableValidationPipe } from './common/pipes/human-readable-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new HumanReadableValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Very Simple Books API')
    .setDescription('A simple books API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log(`🚀 Server ready at http://localhost:3000`);
  console.log(`📘 Swagger docs: http://localhost:3000/docs`);
}

void bootstrap();
