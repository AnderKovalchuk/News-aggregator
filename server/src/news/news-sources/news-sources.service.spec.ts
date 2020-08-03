import { Test, TestingModule } from '@nestjs/testing';
import { NewsSourcesService } from './news-sources.service';

describe('NewsSourcesService', () => {
  let service: NewsSourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsSourcesService],
    }).compile();

    service = module.get<NewsSourcesService>(NewsSourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
