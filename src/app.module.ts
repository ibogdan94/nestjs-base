import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {UserModule} from './user/user.module';
import {PrivateModule} from './private/private.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        PrivateModule
    ],
    controllers: [
        AppController
    ],
    providers: []
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }
}
