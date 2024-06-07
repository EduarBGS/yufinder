import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfileService } from './user_profile.service';
import { CreateUserProfileDto } from './dto/create-user_profile.dto';
import { UpdateUserProfileDto } from './dto/update-user_profile.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
@Auth(Role.USER)
@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  create(@Body() createUserProfileDto: CreateUserProfileDto, @ActiveUser() user: UserActiveInterface) {
    return this.userProfileService.create(createUserProfileDto, user);
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.userProfileService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.userProfileService.findOne(+id, user);
  }

  @Patch(':id')
  update(@Param('id') id: number,@ActiveUser() user: UserActiveInterface,  @Body() updateUserProfileDto: UpdateUserProfileDto) {
    return this.userProfileService.update(+id, updateUserProfileDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.userProfileService.remove(+id, user);
  }
}
