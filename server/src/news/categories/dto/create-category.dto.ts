import { CategoryStatus } from "../entities/category-status.enum";

export class CreateCategoryDto {
  title: string;
  sign: string;
  comment?: string;
  parent?: number;
  status?: CategoryStatus;
}