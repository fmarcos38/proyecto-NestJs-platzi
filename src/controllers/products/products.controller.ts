import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe, //para pasar de string a int
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
//importo Mi pipe
/*import { ParseIntPipe } from 'src/common/parse-int.pipe';*/
//utilizacion de los DTOs
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

/*
    NOTA: el orden de las RUTAS es IMPORTANTE 1ro las NO DINAMICAS (osea q solo son url SIN parametros).

    NOTA: los params q envias por url SIEMPR llegan como STRING.
*/

@Controller('products') //acá YA está especificando q las url se compondran con products(POR ende NO lo necesito poner en las urls q desarrollo)
export class ProductsController {
  //aqí en el constructor voy a realizar la inyeccion de la dependencia(ProductServices)
  //y la voy a declarar como un atributo de la clase
  constructor(private productsServices: ProductsService) {}

  //ruta trae productos
  @Get()
  getAllProductos() {
    return this.productsServices.findAll(); //estoy invocando el metodo q se encarga de dicha tarea en el service
  }

  //ruta busca por id
  @Get(':productId') //lo de acá adentro es el nombre del endpoint()osea la ruta
  @HttpCode(HttpStatus.ACCEPTED) //con esta directiva ASIGNO un status code
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    //al pedir parametro por la url debo usar @Param()
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsServices.findOne(productId);
  }

  //ruta busca por id mas simplificada
  /* @Get('/:id') //lo de acá adentro es el nombre del endpoint()osea la ruta
  getProducto(@Param('id') id: number) {
    //al pedir parametro por la url debo usar @Param() ESTA ves con el nombre del parametro dentro
    return this.productsServices.findOne(id);
  } */

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
  @Get() //ejem con 2 params por url
  getProducts(@Param('limit') limit: number, @Param('offset') offset: number) {
    return { message: 'OK' };
  }

  //CREAR prod
  //Aquí utilizo el DTO
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsServices.createP(payload);
  }

  //actualizar
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsServices.update(id, payload);
  }

  //delete
  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
