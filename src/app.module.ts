import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { CompanyProfileModule } from './company_profile/company_profile.module';
import { UserProfileModule } from './user_profile/user_profile.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5438,
      username: "yufinderv1",
      password: "root",
      database: "db_yufinderv1",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PlanModule,
    CompanyProfileModule,
    UserProfileModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
