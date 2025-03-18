import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Notification {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  reservation_id: number;

  @ApiProperty()
  @Column('text')
  message: string;

  @ApiProperty()
  @Column()
  notification_date: Date;

  @ApiProperty({ default: false })
  @Column({ default: false })
  is_sent: boolean;
}
