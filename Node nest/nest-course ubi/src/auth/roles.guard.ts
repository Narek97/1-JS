import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles-auth.decorator";

// role ete ADMON chi kam en rolery voronq menq tanq hardum chkarana ani
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jstService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    //  stanum enq en rolery voronq dostum unen
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];

      if (bearer !== "Bearer" || !token) {
        throw new UnauthorizedException({ message: "user is not authorized" });
      }

      const user = this.jstService.verify(token);
      req.user = user;
      //stugum enq ete useri role hamapatasxanuma trvat rolerich mekin toxenq hardum ani
      return user.role.some((role) => requiredRoles.includes(role.value));
    } catch (e) {
      throw new HttpException("No access", HttpStatus.FORBIDDEN);
    }
  }
}
