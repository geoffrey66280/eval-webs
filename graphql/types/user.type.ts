import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ReservationType } from './reservation.type';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  keycloackId: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field(() => [ReservationType])
  reservations: ReservationType[];
}

@InputType()
export class createUserInput {
  @Field()
  keycloackId: string;

  @Field()
  email: string;
}
