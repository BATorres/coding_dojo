import { Entity, ObjectIdColumn, ObjectID, Column , OneToOne, ManyToOne, OneToMany } from "typeorm";
import {SalaEntity} from "../sala/sala.entity";

@Entity()

export class UsuarioEntity {

    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    usuario: string;

    @Column()
    correo: string;

    @Column()
    password: string;

    @Column()
    salaCreada: SalaEntity[];
}