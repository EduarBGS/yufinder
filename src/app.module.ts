import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { CompanyProfileModule } from './company_profile/company_profile.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5431,
      username: "yufinder",
      password: "root",
      database: "db_yufinder",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PlanModule,
    CompanyProfileModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
