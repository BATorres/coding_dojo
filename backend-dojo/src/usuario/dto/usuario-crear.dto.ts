import {IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";
import {SalaEntity} from "../../sala/sala.entity";

export class UsuarioCrearDto {

    @IsString()
    @IsNotEmpty()
    usuario: string;

    @IsEmail()
    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    salaCreada: SalaEntity[];
}