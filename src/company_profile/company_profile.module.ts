import { Module } from '@nestjs/common';
import { CompanyProfileService } from './company_profile.service';
import { CompanyProfileController } from './company_profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyProfile } from './entities/company_profile.entity';
import { Plan } from 'src/plan/entities/plan.entity';
import { PlanService } from 'src/plan/plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyProfile, Plan])],
  controllers: [CompanyProfileController],
  providers: [CompanyProfileService, PlanService],
})
export class CompanyProfileModule {}
