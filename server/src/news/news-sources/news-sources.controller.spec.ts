import { Test, TestingModule } from '@nestjs/testing';
import { NewsSourcesController } from './news-sources.controller';

describe('NewsSources Controller', () => {
  let controller: NewsSourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsSourcesController],
    }).compile();

    controller = module.get<NewsSourcesController>(NewsSourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
