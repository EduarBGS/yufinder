import { CompanyProfile } from "src/company_profile/entities/company_profile.entity"
import { User } from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    visibility: string
    @Column()
    description: string
    @Column()
    type: string
    @Column()
    price: number
    @Column( {default: true} )
    status?: boolean

    @ManyToOne(() => User, (user) => user.email,)
    @JoinColumn({name: 'userEmail', referencedColumnName: 'email', })
    user: User;

    //creamos una columna para el email de referencedcolumn
    @Column()
    userEmail: string;
    
    @OneToMany(() => CompanyProfile, (companyProfile) => companyProfile.plan)
    companyProfiles: CompanyProfile[];
    
}
