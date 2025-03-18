import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) { }

  async createNotification(data: { reservation_id: number; message: string; notification_date: string }): Promise<Notification> {
    const notification = this.notificationRepository.create({
      reservation_id: data.reservation_id,
      message: data.message,
      notification_date: new Date(data.notification_date),
      is_sent: false,
    });
    return await this.notificationRepository.save(notification);
  }

  async updateNotification(data: { id: number; message: string; notification_date: string }): Promise<Notification> {
    const notification = await this.notificationRepository.findOne({ where: { id: data.id } });
    if (!notification) {
      throw new NotFoundException('Notification not found');
    }
    notification.message = data.message;
    notification.notification_date = new Date(data.notification_date);
    return await this.notificationRepository.save(notification);
  }

  async getNotification(id: number): Promise<Notification> {
    const notification = await this.notificationRepository.findOne({ where: { id } });
    if (!notification) {
      throw new NotFoundException('Notification not found');
    }
    return notification;
  }
}
