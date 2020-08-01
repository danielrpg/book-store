import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorator/get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
@UseGuards(AuthGuard())
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}
    
    @Post('/signup')
    @ApiResponse({
        description: 'This sign up user'
    })
    @ApiBody({
        type: AuthCredentialsDto
    })
    @ApiBearerAuth()
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    @ApiResponse({
        description: 'This sign in user'
    })
    @ApiBody({
        type: AuthCredentialsDto
    })
    @ApiBearerAuth()
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentialsDto);
    }

    // @Post('/test')
    // @UseGuards(AuthGuard())
    // @ApiResponse({
    //     description: 'This sign in user'
    // })
    // @ApiBody({
    //     type: User
    // })
    // @ApiBearerAuth()
    // test(@GetUser() user: User) {
    //     console.log(user);
    // }
}