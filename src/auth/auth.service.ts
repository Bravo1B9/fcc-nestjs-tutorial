import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signup(dto: AuthDto) {
    return { msg: 'You are signed up' }
  }

  signin() {
    return { msg: 'You are signed in' }
  }

}