import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  //esto VA a ser solo de lectura, esta propiedad readonly(es de Typescriot, NO de JS)
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsString() //decorador para validar q sea string
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

//para el update
export class UpdateProductDto {
  //esto VA a ser solo de lectura, esta propiedad readonly(es de Typescriot, NO de JS)
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
