import {Controller, Get} from '@nestjs/common';
import {ApiUseTags, ApiBearerAuth} from '@nestjs/swagger';
import {User} from '../user/user.decorator';

@ApiBearerAuth()
@ApiUseTags('private')
@Controller('private')
export class PrivateController {
    @Get()
    index(@User('id') userId: number): string {
        return 'Hello Private World!';
    }
}
