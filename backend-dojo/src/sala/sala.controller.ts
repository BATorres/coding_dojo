import { Controller, Get, Param, Post, Body, Put, Delete, BadRequestException, Query } from "@nestjs/common";
import {SalaService} from "./sala.service";
import {SalaEntity} from "./sala.entity";

@Controller('sala')

export class SalaController {

    constructor(
        private readonly _salaService: SalaService
    ) {}

    @Get()
    async obtenerTodos() {
        return await this._salaService.traerTodos()
    }

    @Post('crear')
    async crearUsuario(
        @Body() nuevaSala
    ): Promise<SalaEntity> {
        return await this._salaService.crearSala(nuevaSala)
    }

}