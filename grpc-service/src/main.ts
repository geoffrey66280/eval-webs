import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'notifications',
      protoPath: __dirname + '/../proto/service.proto',
      url: '0.0.0.0:50051',
    },
  });
  await app.listen();
  console.log('gRPC microservice is listening on 50051...');
}
bootstrap();
