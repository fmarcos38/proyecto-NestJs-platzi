import { Injectable, NotFoundException } from '@nestjs/common';
import Product from 'src/entities/product.entities';

@Injectable()
export class ProductsService {
  /*
        En este curso NO vamos a conectar con DB. (ver cursos aparte)
        Solo manejaremos info en memoria,
    */

  //declaro un array para almacenar la info(simula DB)
  private products: Product[] = [
    {
      id: 1,
      name: 'prod 1',
      description: 'asdasdada',
      price: 122,
      stock: 3,
      image: '',
    },
    {
      id: 2,
      name: 'prod 1',
      description: 'asdasdada',
      price: 122,
      stock: 3,
      image: '',
    },
  ];
  //creo contador para creacion del id automaticamnt
  private count = this.products.length;

  //metodos
  //muestra products
  findAll() {
    return this.products;
  }

  //muetra prod
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    //primero verif SI hay error
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  //creacion de un prod
  createP(payload: any) {
    this.count++;
    //instancio un nuevo obj de tipo Prod
    const newProd = {
      id: this.count,
      ...payload,
    };
    this.products.push(newProd);
    return newProd;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      product,
      ...payload,
    };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
