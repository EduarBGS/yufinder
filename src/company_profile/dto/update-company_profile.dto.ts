import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyProfileDto } from './create-company_profile.dto';

export class UpdateCompanyProfileDto extends PartialType(CreateCompanyProfileDto) {}
