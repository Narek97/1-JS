import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exception/validationException";

//es pipum errorneri uxarkelyu dzevy poxelu hamar mer uzat dzevov vor uxarkenq
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      let message = errors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
      });
      throw new ValidationException(message);
    }
    return value;
  }
}
