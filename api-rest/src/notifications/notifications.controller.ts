import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';
import { Notification } from './notification.entity';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @GrpcMethod('NotificationService', 'CreateNotification')
  async createNotification(data: { reservation_id: number; message: string; notification_date: string }): Promise<Notification> {
    return await this.notificationsService.createNotification(data);
  }

  @GrpcMethod('NotificationService', 'UpdateNotification')
  async updateNotification(data: { id: number; message: string; notification_date: string }): Promise<Notification> {
    return await this.notificationsService.updateNotification(data);
  }

  @GrpcMethod('NotificationService', 'GetNotification')
  async getNotification(data: { id: number }): Promise<Notification> {
    return await this.notificationsService.getNotification(data.id);
  }
}
