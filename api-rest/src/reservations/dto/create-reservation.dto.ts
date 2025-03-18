import { IsNotEmpty, IsNumber, IsISO8601 } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  room_id: number;

  @IsNotEmpty()
  @IsISO8601()
  start_time: string;

  @IsNotEmpty()
  @IsISO8601()
  end_time: string;
}
