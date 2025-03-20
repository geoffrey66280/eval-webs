import { IsNotEmpty, IsNumber, IsISO8601 } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  roomId: number;

  @IsNotEmpty()
  @IsISO8601()
  startTime: string;

  @IsNotEmpty()
  @IsISO8601()
  endTime: string;
}
