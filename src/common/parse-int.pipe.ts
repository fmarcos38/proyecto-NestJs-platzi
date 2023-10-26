import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const valor = parseInt(value, 10);
    if (isNaN(valor)) {
      throw new BadRequestException('No se realizo la converción');
    }
    return value;
  }
}
