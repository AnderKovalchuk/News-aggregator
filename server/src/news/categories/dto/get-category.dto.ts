import { Exclude, Expose, Transform, Type } from "class-transformer/decorators";
import { CategoryStatus } from "../entities/category-status.enum";

export class GetCategoryDto {
  readonly id: number;
  title: string;
  sign: string;
  comment?: string;

  @Type(() => GetCategoryDto)
  parent?: GetCategoryDto | null;
  status?: CategoryStatus;
}