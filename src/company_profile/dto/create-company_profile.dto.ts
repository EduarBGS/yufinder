import { IsBoolean, IsInt, IsString } from "class-validator";

export class CreateCompanyProfileDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    photo: string;
    @IsString()
    coverPhoto: string;
    @IsBoolean()
    status: boolean;
    @IsInt()
    planId: number;
}
