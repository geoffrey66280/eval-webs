import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReservationEntity } from './reservation.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  keycloackId: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => ReservationEntity, (reservation) => reservation.user, {
    cascade: true,
    eager: true,
  })
  reservations: ReservationEntity[];
}
