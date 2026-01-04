import { Controller } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { MessagePattern } from "@nestjs/microservices";
import { NOTIFICATION_PATTERNS } from '@libs/contracts'

@Controller()
export class NotificationsController {
    constructor(private readonly service: NotificationsService) {}

    @MessagePattern(NOTIFICATION_PATTERNS.SEND_EMAIL)
    sendEmail(data: any) {
        return this.service.sendEmail(data)
    }
}