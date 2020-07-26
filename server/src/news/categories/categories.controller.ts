import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { sign } from 'crypto';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Controller('/api/news/categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService
  ) { }

  @Get()
  getCategories(): Category[]{
    return this.categoriesService.getAll();
  }
  @Get(':sign')
  getCategory( @Param( 'sign' ) sign: string ): Category {
    return this.categoriesService.getBySign(sign);
  }

  @Delete(':id')
  deleteCategory( @Param ('id') id: number ): Category {
    return this.categoriesService.delete(id);
  }

  @Post()
  addCategory( @Body() category: Category ): Category {
    return this.categoriesService.add(category);
  }

  @Put(':id')
  editCategory( 
    @Param( 'id' ) id: number,
    @Body() category: Category
  ): Category {
    console.log( id );
    return this.categoriesService.edit(id, category);
  }

}
