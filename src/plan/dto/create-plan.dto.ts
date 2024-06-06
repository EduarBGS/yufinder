import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreatePlanDto {
    @IsString()
    name: string;
    @IsString()
    visibility: string;
    @IsString()
    description: string;
    @IsString()
    type: string;
    @IsNumber()
    price: number;
    @IsBoolean()
    status: boolean;
}
