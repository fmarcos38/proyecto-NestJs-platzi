import { Body, Controller, Get, Param, Post } from '@nestjs/common';

/*
    NOTA: el orden de las RUTAS es IMPORTANTE 1ro las NO DINAMICAS (osea q solo son url SIN parametros)
*/


@Controller('products')//acá YA está especificando q las url se compondran con products(POR ende NO lo necesito poner en las urls q desarrollo)
export class ProductsController {

    //ruta trae productos
    @Get()
    getAllProductos() {
        return {
            message: "Muestro todos los prods"
        };
    }


    //ruta busca por id
    @Get('/:id')//lo de acá adentro es el nombre del endpoint()osea la ruta
    getProduct(@Param() params: any) {//al pedir parametro por la url debo usar @Param()
        return {
            message: `product ${params.id}`
        }
    }


    //ruta busca por id mas simplificada
    @Get('/:productId')//lo de acá adentro es el nombre del endpoint()osea la ruta
    getProducto(@Param('productId') productoId: string) {//al pedir parametro por la url debo usar @Param() ESTA ves con el nombre del parametro dentro
        return {
            message: `product ${productoId}`
        }
    }


    //ruta con parametros POR query
    //endpoint simulando envio de datos para una paginacion
    //ejm url-->
    /* OPC 1
    @Get('products')
    getProducts(@Query() params: any){
        const {limit, offset} = params;

        return `Cant de prod a traer: limit=${limit} offset=>${offset}`;
    }
    */
    @Get()
    getProducts(
        @Param('limit') limit: number,
        @Param('offset') offset: number
    ) {
        return {
            message: `Cant de prod a traer: limit=${limit} offset=>${offset}`
        }
    }


    //CREAR prod
    @Post()
    create(@Body() payload: any){
        return {
            message: "se creo con exito",
            payload
        }
    }
}
