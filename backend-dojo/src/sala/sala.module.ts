import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SalaEntity} from "./sala.entity";
import {SalaController} from "./sala.controller";
import {SalaService} from "./sala.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SalaEntity
        ])
    ],
    controllers: [ SalaController ],
    providers: [ SalaService ]
})

export class SalaModule {}