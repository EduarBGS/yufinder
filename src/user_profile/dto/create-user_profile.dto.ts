import { IsInt, IsString } from "class-validator";

export class CreateUserProfileDto {
    @IsString()
    name: string;
    @IsString()
    lastName: string;
    @IsInt()
    agre: number;
    @IsString()
    description: string;
    @IsString()
    photo: string;
    @IsString()
    coverPhoto: string;

}
