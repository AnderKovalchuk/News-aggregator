import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NewsCategory } from './entities/category.entity';
import { CategoryStatus } from './entities/category-status.enum';
import { EditCategoryDto } from './dto/edit-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(NewsCategory)
    private categories: Repository<NewsCategory>,
  ) { }
  // private readonly categories: NewsCategory[] = [
  //   {
  //     id      : 0,
  //     title   : "Без категории",
  //     sign    : " ",
  //     status  : CategoryStatus.publish,
  //   }, {
  //     id      : 1,
  //     title   : "Строительство",
  //     sign    : "building",
  //     status  : CategoryStatus.publish,
  //   }, {
  //     id      : 2,
  //     title   : "Ремонт",
  //     sign    : "repair",
  //     status  : CategoryStatus.publish,
  //   }
  // ];

  getAll(): Promise<NewsCategory[]> {
    return this.categories.find();
  }
  async getAllAsTree(): Promise<NewsCategory[]> {
    const manager = getManager();
    return await manager.getTreeRepository(NewsCategory).findTrees();
  }
  async getAllAsRoot(): Promise<NewsCategory[]> {
    const manager = getManager();
    return await manager.getTreeRepository(NewsCategory).findRoots();
  }

  async getById( 
    id: number
  ): Promise<NewsCategory> {
    const category = await this.categories.findOne( id );
    
    if( !category || category === undefined )
      throw new HttpException( "Запись не найдено", HttpStatus.NOT_FOUND );
    console.log( "cat: " + category );
    return category;
  }

  async getBySign( sign: string ): Promise<NewsCategory> {
    const category = await this.categories.findOne( {
      where: { sign }
    } );
    if( !category )
      throw new HttpException( "Запись не найдено", HttpStatus.NOT_FOUND );
    return category;
  }

  async add( newCategory: CreateCategoryDto ): Promise<NewsCategory> {
    const sign = await this.categories.find( {
      where: { 
        sign: newCategory.sign.trim(),
        // parent: newCategory.parent || 0,
      }
    } );
    if( sign.length > 0 ) {
      throw new HttpException( "Запись уже существует", HttpStatus.NOT_IMPLEMENTED );
    }

    const category = new NewsCategory();
    category.title = newCategory.title;
    category.sign = newCategory.sign;
    category.comment = newCategory.comment || "";
    if( newCategory.parent ) {
      category.parent = await this.getById( newCategory.parent );
    }
    category.status = newCategory.status || CategoryStatus.draft;

    return await this.categories.save(category);
  }

  async delete( id: number ): Promise<void> {
    const res = await this.categories.delete( id ) ;
    console.log(res);
    // const index = this.categories.findIndex(n => n.id == id);
    // console.log(index);
    // if (index !== -1) {
    //   return this.categories.splice(index, 1)[0];
    // } else {
    //   throw new HttpException( "Запись не найдено", HttpStatus.NOT_MODIFIED );
    // }
  }

  async edit(
    id: number,
    newCategory: EditCategoryDto,
  ): Promise<NewsCategory> {
    let category: NewsCategory;
    console.log(newCategory);
    try{
      category =  await this.getById( id );
      console.log( category );
    } catch(e) {
      throw e;
    }

    for (var key in newCategory) {
      category[key] = newCategory[key];
    }

    return await this.categories.save(category);
  }

}
