import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getUser():String {
        return "aejoeng";
    }
}