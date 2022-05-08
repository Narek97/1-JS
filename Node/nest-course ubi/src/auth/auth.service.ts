import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../users/users.model";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  //user registration
  async registration(userDto: CreateUserDto) {
    //stugum enq tench emailov user ka te che
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException("email already exist", HttpStatus.BAD_REQUEST);
    }

    //hashavorum passwordy
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    //stextum user pahum db um
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  //generachnum enq token
  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, role: user.roles };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  //stugum enq validatian
  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);

    const passWordEquals = await bcrypt.compare(
      userDto.password,
      user.password
    );

    if (user && passWordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: "wrong email or password" });
  }
}
