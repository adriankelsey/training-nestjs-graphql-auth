import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'Adrian',
      password: 'not-sercure'
    },
    {
      id: 2,
      username: 'Carl',
      password: 'not-sercure'
    }
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,

    };

    this.users.push(user);
    return user
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}

