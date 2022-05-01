import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const filName = uuid.v4() + ".jpg";
      const filePath = path.resolve(__dirname, "..", "static");
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      } else {
        fs.writeFileSync(path.join(filePath, filName), file.buffer);
        return filName;
      }
    } catch (e) {
      throw new HttpException(
        "Error for download file",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
