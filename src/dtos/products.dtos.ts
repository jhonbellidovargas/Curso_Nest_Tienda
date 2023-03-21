import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

// export class UpdateProductDto {
//   readonly name?: string;
//   readonly description?: string;
//   readonly price?: number;
//   readonly stock?: number;
//   readonly image?: string;
// }

// Usando PartialType Lo no obligatorio pero valida que sea el tipo correcto
export class UpdateProductDto extends PartialType(CreateProductDto) {}
