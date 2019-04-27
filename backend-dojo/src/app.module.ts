import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {SalaModule} from "./sala/sala.module";
import {SalaEntity} from "./sala/sala.entity";
import {WebSocketModule} from "./sala/websockets/websocket.module";

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost:32770/idukay-dojo')
      TypeOrmModule.forRoot({
          useNewUrlParser: true,
          type: 'mongodb',
          host: 'localhost',
          port: 32770,
          database: 'idukay-dojo',
          entities: [
              UsuarioEntity,
              SalaEntity
          ],
          synchronize: true,
          dropSchema: true
      }),
      UsuarioModule,
      SalaModule,
      WebSocketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
