import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async validateUser(username: string, passowrd: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        // TODO: make this more secure
        if (user && user.password === passowrd) { 
            // destructure passowrd out of obect so it is secure when returning the object
            const { password, ...result } = user;
            return result
        }

        return null;
    }
}
