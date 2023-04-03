import { IsString, IsNumber,  IsNotEmpty} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateLogDto {
    id: number;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
 
    @Transform(({ value }) => Number(value))
    @IsNumber()
    distance: number;
}
