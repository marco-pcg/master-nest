import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { USER_PATTERNS } from '../../../../../libs/contracts/src/users.patterns'

@Controller('users')
export class UsersController {
    constructor(
        @Inject('RABBITMQ_SERVICE')
        private readonly client: ClientProxy,
    ) {}

    @Post()
    create(@Body() data: any) {
        return this.client.send(USER_PATTERNS.CREATE, data)
    }

    @Get()
    findAll() {
        return this.client.send(USER_PATTERNS.FIND_ALL, {})
    }
}