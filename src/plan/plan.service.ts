import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan) 
    private readonly planRepository: Repository<Plan>,
  ){}
  async create(createPlanDto: CreatePlanDto, user: UserActiveInterface) {
    return this.planRepository.save({...createPlanDto, userEmail: user.email})
  }

  findAll(user: UserActiveInterface) {
    return this.planRepository.find()
  }

  async findOne(id: number, user: UserActiveInterface) {
   const plan = await this.planRepository.findOne({where: {id: id, userEmail: user.email}})
    if(!plan){
      throw new BadRequestException('Plan no existe')
    }
    return plan
  }

  async update(id: number, updatePlanDto: UpdatePlanDto, user: UserActiveInterface) {
    const plant = await this.planRepository.findOne({where: {id: id, userEmail: user.email}})

    if(!plant){
      throw new BadRequestException('Plan no existe')
    }
    return this.planRepository.save({...plant,...updatePlanDto})
  }

  async remove(id: number, user: UserActiveInterface) {
    const plan = await this.planRepository.findOne({where: {id: id, userEmail: user.email}})
    if(!plan){
      throw new BadRequestException('Plan no existe')
    }
    return this.planRepository.remove(plan)
  }
} 
