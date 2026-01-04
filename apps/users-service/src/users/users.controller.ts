import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { USER_PATTERNS } from "@libs/contracts";
import { UsersService } from "./users.service";


@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @MessagePattern(USER_PATTERNS.CREATE)
    createUser(data: any) {
        return this.usersService.create(data)
    }

    @MessagePattern(USER_PATTERNS.FIND_ALL)
    findAll() {
        return this.usersService.findAll()
    }

}