import { Controller, Get, Param } from '@nestjs/common';

/*
    NOTA: el orden de las RUTAS es IMPORTANTE 1ro las NO DINAMICAS (osea q solo son url SIN parametros)
*/

@Controller('categories')
export class CategoriesController {

    //ruta con 2 parametros
    @Get('/:id/product/:prodId')
    getProductByCategory(
        @Param('id') id: string,
        @Param('prodId') prodId: string,
    ) {
        return `Category: ${id} - Product: ${prodId}`;
    }
}
