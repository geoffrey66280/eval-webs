import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Room {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  capacity: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  location: string;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;
}
