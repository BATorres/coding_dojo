import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioController} from "./usuario.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsuarioEntity
        ])
    ],
    controllers: [ UsuarioController ],
    providers: [ UsuarioService ]
})

export class UsuarioModule {}