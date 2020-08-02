import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

import { NewsCategory } from './entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NewsCategory
    ])
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
