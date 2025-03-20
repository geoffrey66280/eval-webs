import { IsOptional, IsNumber, IsISO8601, IsString, IsIn } from 'class-validator';

export class UpdateReservationDto {
  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsNumber()
  roomId?: number;

  @IsOptional()
  @IsISO8601()
  startTime?: string;

  @IsOptional()
  @IsISO8601()
  endTime?: string;

  @IsOptional()
  @IsString()
  @IsIn(['pending', 'approved', 'rejected', 'cancelled'])
  status?: string;
}
