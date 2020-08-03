import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { parse } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsSourcesModule } from './news/news-sources/news-sources.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.server.development.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST_NAME || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username:  process.env.DB_USERNAME,
      password:  process.env.DB_PASSWORD,
      database:  process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true,
    }),
    NewsModule,
    NewsSourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
