import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyProfileService } from './company_profile.service';
import { CreateCompanyProfileDto } from './dto/create-company_profile.dto';
import { UpdateCompanyProfileDto } from './dto/update-company_profile.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
@Auth(Role.EMPRESA)
@Controller('company-profile')
export class CompanyProfileController {
  constructor(private readonly companyProfileService: CompanyProfileService) {}

  @Post()
  create(@Body() createCompanyProfileDto: CreateCompanyProfileDto, @ActiveUser() user: UserActiveInterface) {
    return this.companyProfileService.create(createCompanyProfileDto, user);
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.companyProfileService.findAll(user);
  }
  @Get('/perfiles')
  companiaPlan(@ActiveUser() user: UserActiveInterface) {
    return this.companyProfileService.companiaPlan(user);
  }
  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.companyProfileService.findOne(+id, user);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCompanyProfileDto: UpdateCompanyProfileDto, @ActiveUser() user: UserActiveInterface) {
    return this.companyProfileService.update(+id, updateCompanyProfileDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.companyProfileService.remove(+id, user);
  }
}
