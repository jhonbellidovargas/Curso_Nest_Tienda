import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  //Res,
  //ParseIntPipe,
} from '@nestjs/common';
//import { Response } from 'express';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ): object {
    // return {
    //   message: `Products: limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    // };
    return this.productsService.findAll();
    // http://localhost:3000/products?limit=100&offset=50&brand=Apple
  }

  @Get('filter')
  gettFilter(): string {
    return `I'm a filter`;
    // http://localhost:3000/products/filter
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): object {
    // return `Product ${params.id}`;
    return this.productsService.findOne(id);
    // http://localhost:3000/products/123
  }

  // @Get('')
  // getProducts(@Query() params): string {
  //   const { limit, offset } = params;
  //   return `Products: limit => ${limit}, offset => ${offset}`;
  //   // http://localhost:3000/products?limit=100&offset=50
  // }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() payload: CreateProductDto): object {
    // return {
    //   message: 'action create',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto): object {
    // return {
    //   message: `action update ${id}`,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  // Personalizado con Express
  //delete(@Res() response: Response, @Param('id') id: string): boolean {
  // delete(@Param('id') id: string): object {
  //   return {
  //     message: `action delete ${id}`,
  //   };
  delete(@Param('id') id: string): boolean {
    // return response.status(200).send({
    //   message: `action delete ${id}`,
    // });
    return this.productsService.remove(+id);
  }
}
