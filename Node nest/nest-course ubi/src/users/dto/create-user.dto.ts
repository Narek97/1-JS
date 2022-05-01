import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "email" })
  @IsEmail({}, { message: "Incorrect email" })
  @IsString({ message: "Email must be string" })
  readonly email: string;

  @IsString({ message: "Email must be string" })
  @Length(4, 16, { message: "min length 4 max length 16" })
  @ApiProperty({ example: "123456user", description: "password" })
  readonly password: string;
}
