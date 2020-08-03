import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { NewsSourcesController } from './news-sources.controller';
import { NewsSourcesService } from './news-sources.service';

import { NewsSources } from './entities/news-sources.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NewsSources
    ])
  ],
  controllers: [NewsSourcesController],
  providers: [NewsSourcesService]
})
export class NewsSourcesModule {}
