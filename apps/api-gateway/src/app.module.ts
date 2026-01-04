import { Module } from "@nestjs/common";
import { RabbitMQModule } from '@libs/rabbitmq'
import { UsersModule } from './modules/users/users.module'

@Module({
    imports: [RabbitMQModule, UsersModule]
})

export class AppModule {}