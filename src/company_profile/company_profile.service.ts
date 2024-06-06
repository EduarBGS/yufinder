import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanyProfileDto } from './dto/create-company_profile.dto';
import { UpdateCompanyProfileDto } from './dto/update-company_profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyProfile } from './entities/company_profile.entity';
import { Repository } from 'typeorm';
import { Plan } from 'src/plan/entities/plan.entity';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CompanyProfileService {

  constructor(@InjectRepository(CompanyProfile) 
  private readonly companyRepository: Repository<CompanyProfile>,
  @InjectRepository(Plan) 
  private readonly planRepository: Repository<Plan>
){

  }
 async create(createCompanyProfileDto: CreateCompanyProfileDto, user: UserActiveInterface) {
    const plan = await this.planRepository.findOne({where: {id: createCompanyProfileDto.planId, userEmail: user.email}})
    if(!plan){
      throw new BadRequestException('el plan no existe')
      
    }
    return await this.companyRepository.save({...createCompanyProfileDto, userEmail: user.email, plan});

  }
  async companiaPlan(user: UserActiveInterface){
    return await this.companyRepository.find({where: {userEmail: user.email}, relations: ['plan']})
  }
  findAll(user: UserActiveInterface) {
    return this.companyRepository.find({where: {userEmail: user.email}})
  }

  async findOne(id: number, user: UserActiveInterface) {
    const company = await this.companyRepository.findOne({where: {id: id, userEmail: user.email}})
    if(!company){
      throw new BadRequestException('la compañia no existe')
    }
    return company
  }

  async update(id: number, updateCompanyProfileDto: UpdateCompanyProfileDto, user: UserActiveInterface) {
    const plan = await this.planRepository.findOne({where: {id: updateCompanyProfileDto.planId, userEmail: user.email}})
    if(!plan){
      throw new BadRequestException('el plan no existe')
    }
    const company = await this.companyRepository.findOne({where: {id: id, userEmail: user.email}})
    if(!company){
      throw new BadRequestException('la compañia no existe')
    }
    return await this.companyRepository.save({...company,...updateCompanyProfileDto, userEmail: user.email, plan});
    

  }

  async remove(id: number, user: UserActiveInterface) {
    const company = await this.companyRepository.findOne({where: { id: id, userEmail: user.email}})
    if(!company){
      throw new BadRequestException('la empresa no existe')
    }
    return await this.companyRepository.remove(company)
  }
}
