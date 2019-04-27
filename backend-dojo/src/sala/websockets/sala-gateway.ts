import { WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    WsResponse,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,} from "@nestjs/websockets";
import { Observable, from } from "rxjs";

@WebSocketGateway(3001)

export class SalaGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    afterInit(server: any) {
        console.log('Init sala-escucha');
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('Conectando al servidor', client.id, args);
    }

    handleDisconnect(client: any) {
        console.log('Se desconectó del servidor', client.id);
    }
}
