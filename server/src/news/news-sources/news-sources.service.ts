import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { classToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { NewsSourceDto } from './dto/news-source.dto';
import { NewsSources } from './entities/news-sources.entity';

@Injectable()
export class NewsSourcesService {
  constructor(
    @InjectRepository(NewsSources)
    private sourcesRepository: Repository<NewsSources>,
  ){ }

  async getAll(): Promise<NewsSources[]> {
    return await this.sourcesRepository.find();
  }

  async getById(
    id: number,
  ): Promise<NewsSources> {
    return await this.sourcesRepository.findOne( id );
  }

  async add(
    newSource: NewsSourceDto
  ) {
    return await this.sourcesRepository.save(
      classToClass(newSource)
    );
  }

  async edit(
    id: number,
    newSource: NewsSourceDto
  ): Promise<void> {
    const result = await this.sourcesRepository.update(
      { id },
      newSource
    )

    console.log(result)
  }
}
