const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, password) {
    //stugel ka etpisi user
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("Email already exist");
    }
    //hasavorel paroly
    const hashPassword = await bcrypt.hash(password, 3);
    //ejy activacia anelu link, gmailov vor hastati vor uzuma granchvi
    const activationLink = uuid.v4();
    //stextel jamanakavor user mijev activachnely
    //pahel serverum
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    //uxarkum enq namak
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    //generachnum token
    const tokens = tokenService.generateToken({ ...userDto });
    //pahum dbum
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    //veradardnum useri masin info
    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink) {
    //man gali nshvat linkov userin
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("incorrect url");
    }
    //gtat useri activate dashty sarqum true
    user.isActivated = true;
    //save anum db-um
    await user.save();
  }

  async login(email, password) {
    //man gali userin
    const user = await UserModel.findOne({ email });
    //ete et emailov user chka
    if (!user) {
      throw ApiError.BadRequest("email is incorrect");
    }
    //stugum grat u db u, pahat passy
    const isPassEquals = await bcrypt.compare(password, user.password);
    //ete passy chi hamapatasxanum
    if (!isPassEquals) {
      throw ApiError.BadRequest("password is incorrect");
    }
    //verdnum en dashtery voronq petq en
    const userDto = new UserDto(user);
    //generachnum nor token
    const tokens = tokenService.generateToken({ ...userDto });
    //pahum tokeny
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    //veradarsnum tokeny u userin
    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    //jnjum tokeny db-ich
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    //stugum ete token chka
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    //validacia anum stugum kext token chi u ira jamanky uji meja
    const userData = tokenService.validateRefreshToken(refreshToken);
    //gtnum tikeny
    const tokenFromDb = await tokenService.findToken(refreshToken);
    //ete user kam token chka error qchum
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    //gtnum userin
    const user = await UserModel.findById(userData.id);
    //verdnum en dashtery voronq petq en
    const userDto = new UserDto(user);
    //generachnum nor token
    const tokens = tokenService.generateToken({ ...userDto });
    //pahum tokeny
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    //veradarsnum tokeny u userin
    return {
      ...tokens,
      user: userDto,
    };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
