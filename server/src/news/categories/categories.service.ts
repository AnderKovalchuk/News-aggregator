import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoryStatus } from './entities/category-status.enum';
import { EditCategoryDto } from './dto/edit-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = [
    {
      id      : 0,
      title   : "Без категории",
      sign    : " ",
      status  : CategoryStatus.publish,
    }, {
      id      : 1,
      title   : "Строительство",
      sign    : "building",
      status  : CategoryStatus.publish,
    }, {
      id      : 2,
      title   : "Ремонт",
      sign    : "repair",
      status  : CategoryStatus.publish,
    }
  ];

  getAll(): Category[] {
    return this.categories;
  }

  getById( id: number ): Category {
    const category = this.categories.find( category => category.id == id );
    if( category )
      return category;
    throw new HttpException( "Запись не найдено", HttpStatus.NOT_FOUND );
  }

  getBySign( sign: string ): Category {
    const category = this.categories.find( category => category.sign === sign.trim() );
    if( !category )
      throw new HttpException( "Запись не найдено", HttpStatus.NOT_FOUND );
    return category;
  }

  add( newCategory: CreateCategoryDto ) {
    const sign = this.categories.find( category => category.sign === newCategory.sign.trim() );
    if( sign ) {
      throw new HttpException( "Запись уже существует", HttpStatus.NOT_IMPLEMENTED );
    }

    const category: Category = {
      id: this.categories.length + 1,
      title: newCategory.title,
      sign: newCategory.sign,
      comment: newCategory.comment || "",
      parent: newCategory.parent || 0,
      status: newCategory.status || CategoryStatus.draft,
    }

    this.categories.push(category);
    return category;
  }

  delete( id: number ): Category {
    const index = this.categories.findIndex(n => n.id == id);
    console.log(index);
    if (index !== -1) {
      return this.categories.splice(index, 1)[0];
    } else {
      throw new HttpException( "Запись не найдено", HttpStatus.NOT_MODIFIED );
    }
  }

  edit(
    id: number,
    newCategory: EditCategoryDto,
  ): Category {
    let category: Category;
    console.log(newCategory);
    try{
      category =  this.getById(id);
    } catch(e) {
      throw new HttpException( "Запись не найдено", HttpStatus.NOT_MODIFIED );
    }

    for (var key in newCategory) {
      category[key] = newCategory[key];
    }

    return category;
  }

}
