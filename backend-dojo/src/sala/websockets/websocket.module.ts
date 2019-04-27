import { Module } from "@nestjs/common";
import {SalaModule} from "../sala.module";
import {SalaGateway} from "./sala-gateway";

@Module({
    imports:[ SalaModule ],
    exports:[],
    controllers:[],
    providers:[ SalaGateway ]
})

export class WebSocketModule { }
