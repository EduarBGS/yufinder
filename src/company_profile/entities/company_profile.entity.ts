import { Plan } from "src/plan/entities/plan.entity"
import { User } from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CompanyProfile {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    photo: string
    @Column()
    coverPhoto: string
    @Column()
    status: boolean

    @ManyToOne(() => User, (user) => user.email,)
    @JoinColumn({name: 'userEmail', referencedColumnName: 'email', })
    user: User;

    //creamos una columna para el email de referencedcolumn
    @Column()
    userEmail: string;

    @ManyToOne(() => Plan, (plan) => plan.id)
    @JoinColumn({name: 'planId', referencedColumnName: 'id', })
    plan: Plan;
}
