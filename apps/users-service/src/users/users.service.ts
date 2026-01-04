import { Injectable } from "@nestjs/common";


@Injectable()
export class UsersService {
    private users: any[] = []

    create(data: any) {
        this.users.push(data)
        return { success: true, data }
    }

    findAll() {
        return this.users
    }
}