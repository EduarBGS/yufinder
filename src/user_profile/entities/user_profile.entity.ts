
import { User } from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number 
    @Column()
    name: string
    @Column()
    lastName: string
    @Column()
    agre: number
    @Column()
    description: string
    @Column()
    photo: string
    @Column()
    coverPhoto: string

    @ManyToOne(() => User, (user) => user.email,)
    @JoinColumn({name: 'userEmail', referencedColumnName: 'email', })
    user: User;

    //creamos una columna para el email de referencedcolumn
    @Column()
    userEmail: string;
}
