import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Post } from "../posts/posts.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: "id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "user@gmail.com", description: "email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "123456user", description: "password" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: "true", description: "isBanned" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: "For hooliganism", description: "Banned reason" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  // vor user-roles modelum karananq role tablich verdnenq ira idn, shaty-shatin kap
  @BelongsToMany(() => Role, () => UserRoles)
  // <roles > es inch anun vor talis enq users.servicum set aneluch nuyn anuny piti tanq u DB stexti dasht
  //  karar liner roles123: Role[] et jamanak uremy set aneluc piti greynq roles123
  roles: Role[];

  //user tablin avelachnenq post tably, meky-shatin kap
  @HasMany(() => Post)
  posts: Post[];
}
