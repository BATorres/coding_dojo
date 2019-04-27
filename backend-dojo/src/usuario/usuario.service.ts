import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from 'typeorm';
import {UsuarioCrearDto} from "./dto/usuario-crear.dto";

@Injectable()

export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>
    ) {}

    async traerTodos() {
        const usuarios = await this._usuarioRepository.find();
        return usuarios
    }

    async crearUsuario(usuarioACrear: UsuarioCrearDto): Promise<UsuarioEntity> {
        const nuevoUsuario = await this._usuarioRepository.save(usuarioACrear);
        return nuevoUsuario
    }
}