import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

  signup() {
    return { msg: 'You are signed up' }
  }

  signin() {
    return { msg: 'You are signed in' }
  }

}