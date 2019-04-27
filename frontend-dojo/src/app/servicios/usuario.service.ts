import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {environment} from "../../environments/environment";

@Injectable()

export class UsuarioService {

  constructor(
    private readonly _httpClient: HttpClient
  ) {}

  crear(nuevoUsuario: UsuarioInterface): Observable<any> {
    return this._httpClient.post(environment.url + '/usuario/crear', nuevoUsuario)
  }
}
