import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  
// Enable CORS
app.enableCors({
  origin: '*', // Be more specific in production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
});

// Create uploads directory if it doesn't exist
const uploadDir = configService.get('UPLOAD_DIR');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

// Serve static files
app.useStaticAssets(uploadDir, {
  prefix: '/uploads',
});

  // app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(8002);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
