import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Post } from "../posts/posts.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),

    //  ete urish module uzum enq ogtagortenq tvyal moduli mej import enq anum stex
    RolesModule,
    //   ete mi erku modulner irar mej enq ogtagortum orinak stex AuthModule, AuthModule-um UsersModule vor anverj cikl chngni
    forwardRef(() => AuthModule),
  ],
  //export enq anum vor urish tex karananq iran service ogtagortel
  exports: [UsersService],
})
export class UsersModule {}
