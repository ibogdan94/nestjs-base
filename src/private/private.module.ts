import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {PrivateController} from './private.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from '../user/user.module';
import {UserEntity} from '../user/user.entity';
import {AuthMiddleware} from '../user/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), UserModule],
    providers: [],
    controllers: [
        PrivateController
    ],
    exports: []
})
export class PrivateModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({path: 'private/*', method: RequestMethod.ALL});
    }
}
