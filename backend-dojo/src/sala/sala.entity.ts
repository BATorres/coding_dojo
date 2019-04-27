import { Entity, ObjectIdColumn, ObjectID, Column, OneToOne, ManyToOne, OneToMany } from "typeorm";
import {UsuarioInterface} from "../interfaces/usuario.interface";

@Entity()

export class SalaEntity {
    @ObjectIdColumn()
    id?: ObjectID

    @Column()
    fecha: Date;

    @Column()
    participantes: UsuarioInterface[]
  }