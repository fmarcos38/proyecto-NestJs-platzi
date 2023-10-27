import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { CategoriesService } from 'src/services/categories/categories.service';

/*
    NOTA: el orden de las RUTAS es IMPORTANTE 1ro las NO DINAMICAS (osea q solo son url SIN parametros)
*/

@Controller('categories')
export class CategoriesController {
  constructor(private category: CategoriesService) {}

  @Get()
  findAll() {
    return this.category.findAll();
  }

  @Get(':id')
  findOne(id: number) {
    return this.category.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.category.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.category.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.category.remove(+id);
  }
}
