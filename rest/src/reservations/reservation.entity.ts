import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Check } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Check(`"start_time" < "end_time"`)
export class Reservation {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  user_id: number;

  @ApiProperty()
  @Column()
  room_id: number;

  @ApiProperty()
  @Column()
  start_time: Date;

  @ApiProperty()
  @Column()
  end_time: Date;

  @ApiProperty({ enum: ['pending', 'approved', 'rejected', 'cancelled'], default: 'pending' })
  @Column({ default: 'pending' })
  status: string;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;
}
