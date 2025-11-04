import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as dotenv from 'dotenv';

dotenv.config(); // Load biến môi trường

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix("api/v3") // set same router
    app.enableCors()
    app.useGlobalPipes() // validation data
    // app.useGlobalFilters();


    const port = process.env.PORT || 3000; // fallback nếu chưa có

    // Swagger config
    const config = new DocumentBuilder()
        .setTitle('GoMemore API')
        .setDescription('API mô tả tính năng hệ thống')
        .setVersion('1.0')
        .addBearerAuth() // nếu có auth
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger/index.html', app, document);
    console.log(`localhost:${port}`)
    await app.listen(port)
}
bootstrap();
