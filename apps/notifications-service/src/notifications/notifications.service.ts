import { Injectable } from "@nestjs/common";


@Injectable()
export class NotificationsService {
    sendEmail(payload: any) {
        console.log('Email sent: ', payload)
        return { success: true }
    }
}