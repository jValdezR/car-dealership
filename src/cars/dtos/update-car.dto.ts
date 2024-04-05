import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateCarDto{

    // @IsString()
    // @IsUUID()
    // @IsOptional()
    // readonly id?: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}