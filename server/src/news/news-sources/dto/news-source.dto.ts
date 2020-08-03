import { IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { ParsingFilter } from "../entities/parsing-filter.enum";
import { ParsingType } from "../entities/parsing-type.enum";

export enum NewsSourceDtoGroup { 
  edit = "EDIT", 
  add = "ADD",
}

export class NewsSourceDto {
  @IsOptional({ groups: [ NewsSourceDtoGroup.edit ]})
  @IsString({ groups: [ NewsSourceDtoGroup.add ]})
  title: string

  @IsOptional({ groups: [ NewsSourceDtoGroup.edit ]})
  @IsUrl({ }, { groups: [ NewsSourceDtoGroup.add ]} )
  link: string

  @IsOptional({ groups: [ NewsSourceDtoGroup.edit ]})
  @IsEnum( ParsingType, { groups: [ NewsSourceDtoGroup.add ] } )
  parsingType: ParsingType;

  @IsOptional({ groups: [ NewsSourceDtoGroup.edit ]})
  @IsEnum( ParsingFilter, { groups: [ NewsSourceDtoGroup.add ]} )
  parsingFilter: ParsingFilter;

  @IsOptional()
  @IsString()
  comment?: string;
}