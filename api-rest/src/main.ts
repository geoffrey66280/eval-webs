import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Configuration Swagger pour l'API REST
  const config = new DocumentBuilder()
    .setTitle('Plateforme de réservation de salles')
    .setDescription('API REST pour réservation de salles')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Connexion du microservice gRPC
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'notifications',                   // Nom du package défini dans votre proto
      protoPath: __dirname + '/../proto/service.proto', // Chemin vers le fichier proto
      url: '0.0.0.0:50051',
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);
  console.log('Application démarrée sur le port 3000 avec gRPC sur le port 50051');
}
bootstrap();
