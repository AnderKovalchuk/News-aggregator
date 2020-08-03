import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { NewsSources } from './entities/news-sources.entity';
import { NewsSourcesService } from './news-sources.service';
import { NewsSourceDto, NewsSourceDtoGroup } from './dto/news-source.dto';

@Controller('/api/news/news-sources')
export class NewsSourcesController {
  constructor(
    private newsSourcesService: NewsSourcesService,
  ) { }

  @Get()
  getNewsSources(): Promise<NewsSources[]> {
    return this.newsSourcesService.getAll();
  }

  @Get(':id')
  getNewsSource( 
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.newsSourcesService.getById( id );
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      groups: [ NewsSourceDtoGroup.add ]
    })
  )
  addNewsSource(
    @Body() newNewsSource: NewsSourceDto
  ) {
    console.log(newNewsSource);
    return this.newsSourcesService.add( newNewsSource );
  }

  @Put(':id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      groups: [ NewsSourceDtoGroup.edit ]
    })
  )
  editNewsSource(
    @Param('id', ParseIntPipe) id: number,
    @Body() newNewsSource: NewsSourceDto,
  ) {
    console.log(newNewsSource);
    return this.newsSourcesService.edit( id, newNewsSource );
  }
}
