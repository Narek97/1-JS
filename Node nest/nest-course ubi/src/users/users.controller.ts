import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags("Users")
@Controller("users")
//controlleri mej grum enq rest hardumnery
export class UsersController {
  //stex kanchum enq service vor karananq meji funkcianery ogtagortenq
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get users" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard) // login chexat usery vor chkarana es hardumy ani
  @Roles("ADMIN") // talis enq en roly kam rolery voronq dostum unenana
  @UseGuards(RolesGuard) // ete useri roly mer tvat roly chi es hardumy chkarana ani
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Get role for user" })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard) // login chexat usery vor chkarana es hardumy ani
  @Roles("ADMIN") // talis enq en roly kam rolery voronq dostum unenana
  @UseGuards(RolesGuard) // ete useri roly mer tvat roly chi es hardumy chkarana ani
  @Post("/role")
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: "ban user" })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard) // login chexat usery vor chkarana es hardumy ani
  @Roles("ADMIN") // talis enq en roly kam rolery voronq dostum unenana
  @UseGuards(RolesGuard) // ete useri roly mer tvat roly chi es hardumy chkarana ani
  @Post("/ban")
  banUser(@Body() dto: BanUserDto) {
    return this.usersService.banUser(dto);
  }
}
