import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {SalaEntity} from "./sala.entity";

@Injectable()

export class SalaService {
    constructor(
        @InjectRepository(SalaEntity)
        private readonly _salaRepository: Repository<SalaEntity>
    ) {}

    async traerTodos() {
        const salas = await this._salaRepository.find();
        return salas
    }

    async crearSala(usuarioACrear: SalaEntity): Promise<SalaEntity> {
        const nuevaSala = await this._salaRepository.save(usuarioACrear);
        return nuevaSala
    }
}