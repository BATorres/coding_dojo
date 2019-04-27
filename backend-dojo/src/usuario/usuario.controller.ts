import { Controller, Get, Param, Post, Body, Put, Delete, BadRequestException, Query } from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('usuario')

export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService
    ) {}

    @Get()
    async obtenerTodos() {
        return await this._usuarioService.traerTodos()
    }

    @Post('crear')
    async crearUsuario(
        @Body() nuevoUsuario
    ): Promise<UsuarioEntity> {
        return await this._usuarioService.crearUsuario(nuevoUsuario)
    }

}