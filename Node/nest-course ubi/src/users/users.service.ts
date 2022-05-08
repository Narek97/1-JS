import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import * as Http from "http";

@Injectable()
// servicei mej grum enq funkchianer  DB i het
export class UsersService {
  //stex kanchum enq DB i modely vor Db um popoxutyunner anenq
  constructor(
    @InjectModel(User)
    private userRepository: typeof User, // User model
    private roleService: RolesService // Role model urish modelich import arat
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("USER");

    // userin avelachnum enq nor dasht roles anunov u tali arjeqy pahuma db um
    await user.$set("roles", [role.id]);
    // userin get aneluch et role hety vor ga
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    //{ include: { all: true } } vor bolor dashtery vory kapvata useri het beri
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add("role", role.id);
      return dto;
    }
    throw new HttpException("user or role not founded", HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException("user not founded", HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }
}
