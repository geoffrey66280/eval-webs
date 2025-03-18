import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReservationEntity } from './reservation.entity';

@Entity('notif')
export class NotifEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reservationId: string;

  @Column()
  message: string;

  @CreateDateColumn()
  notificationDate: Date;

  @Column()
  isSent: boolean;

  @ManyToOne(
    () => ReservationEntity,
    (reservation) => reservation.notifications,
  )
  reservation: ReservationEntity;
}
