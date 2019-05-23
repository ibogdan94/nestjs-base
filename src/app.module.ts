import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {UserModule} from './user/user.module';
import {PrivateModule} from './private/private.module';

@Module({
    imports: [UserModule, PrivateModule],
    controllers: [AppController],
})
export class AppModule {
}
