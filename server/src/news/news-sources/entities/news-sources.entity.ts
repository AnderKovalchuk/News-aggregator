import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ParsingFilter } from "./parsing-filter.enum";
import { ParsingType } from "./parsing-type.enum";
import { SourceStatus } from "./source-status.enum";

@Entity()
export class NewsSources {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column({
    type: 'enum',
    enum: ParsingType,
    default: ParsingType.rss,
  })
  parsingType: ParsingType;

  @Column({
    type: 'enum',
    enum: ParsingFilter,
    default: ParsingFilter.onlyAnnotation,
  })
  parsingFilter: ParsingFilter;

  @Column({
    type: 'enum',
    enum: SourceStatus,
    default: SourceStatus.inactive,
  })
  sourceStatus: SourceStatus;

  @Column({
    type: 'json',
    default: null
  })
  additionSettings?: any;

  @Column({
    default: ""
  })
  comment?: string;

  @CreateDateColumn()
  createDate?: any;

  @CreateDateColumn()
  updateData?: any;
}