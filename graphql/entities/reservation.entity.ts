import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NotifEntity } from './notif.entity';
import { RoomEntity } from './room.entity';
import { UserEntity } from './user.entity';

@Entity('reservation')
export class ReservationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  roomId: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  status: string;

  @ManyToOne(() => UserEntity, (user) => user.reservations)
  user: UserEntity;

  @ManyToOne(() => RoomEntity, (room) => room.reservations)
  room: RoomEntity;

  @OneToMany(() => NotifEntity, (notification) => notification.reservation, {
    cascade: true,
    eager: true,
  })
  notifications: NotifEntity[];
}
