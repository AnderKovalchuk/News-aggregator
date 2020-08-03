import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { NewsSourcesModule } from './news-sources/news-sources.module';

@Module({
  imports: [CategoriesModule, NewsSourcesModule],
  exports: [
    CategoriesModule
  ]
})
export class NewsModule {}
