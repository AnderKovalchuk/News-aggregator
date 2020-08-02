import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { NewsCategory } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { EditCategoryDto } from './dto/edit-category.dto';
import { GetCategoriesQuery } from './dto/get-categories.query-type';

@Controller('/api/news/categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService
  ) { }

  @Get()
  getCategories(
    @Query("type") typeQuery: GetCategoriesQuery
  ): Promise<NewsCategory[]> {
    if ( typeQuery == GetCategoriesQuery.tree )
      return this.categoriesService.getAllAsTree();
    if ( typeQuery == GetCategoriesQuery.root )
      return this.categoriesService.getAllAsRoot();

    return this.categoriesService.getAll();
  }

  @Get(':sign')
  async getCategory(
    @Param( 'sign' ) sign: string 
  ): Promise<NewsCategory> {
    return await this.categoriesService.getBySign(sign)
  }

  @Delete(':id')
  deleteCategory( @Param ('id') id: number ): Promise<void> {
    return this.categoriesService.delete(id);
  }

  @Post()
  addCategory( 
    @Body() category: CreateCategoryDto
  ): Promise<NewsCategory> {
    return this.categoriesService.add( category );
  }

  @Put(':id')
  editCategory( 
    @Param( 'id' ) id: number,
    @Body() category: EditCategoryDto
  ): Promise<NewsCategory> {
    return this.categoriesService.edit(id, category);
  }

}
