import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver
export class UserResolver {
    constructor(private userService: UserService) {}

    @Mutation(() => User)
    async signUp(@Args('username') username: string, @Args('password') password: string): Promise<User>{
        return this.userService.create(username, password);
    }
}