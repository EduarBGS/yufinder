import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user_profile.dto';
import { UpdateUserProfileDto } from './dto/update-user_profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entities/user_profile.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

@Injectable()
export class UserProfileService {
  constructor(@InjectRepository(UserProfile) 
private readonly userrepository: Repository<UserProfile>) {}
  async create(createUserProfileDto: CreateUserProfileDto, user: UserActiveInterface) {
    const existeEmail = await this.userrepository.findOne({where: {userEmail: user.email}})
    if (existeEmail) {
      throw new BadRequestException('El usuario ya tiene un perfil');
    }
   return this.userrepository.save({...createUserProfileDto, userEmail: user.email})
  }

  findAll(user: UserActiveInterface) {
    return this.userrepository.find({where: {userEmail: user.email}})
  }

  async findOne(id: number, user: UserActiveInterface) {
    const userprofile = await this.userrepository.findOne({where: {id: id , userEmail: user.email}})
    if (!userprofile) {
      throw new BadRequestException('El usuario no tiene un perfil');
    }
    return userprofile
  }

  async update(id: number, updateUserProfileDto: UpdateUserProfileDto, user: UserActiveInterface) {
    const userprofile = await this.userrepository.findOne({where: {id: id, userEmail: user.email}})
    if (!userprofile) {
      throw new BadRequestException('El usuario no tiene un perfil');
    }
    return this.userrepository.save({...userprofile,...updateUserProfileDto, userEmail: user.email})
  }

  async remove(id: number, user: UserActiveInterface) {
    const userprofile = await this.userrepository.findOne({where: {id: id, userEmail: user.email }})
    if (!userprofile) {
      throw new BadRequestException('El usuario no tiene un perfil');
    }
    return this.userrepository.delete({id: id, userEmail: user.email})
  }
}
