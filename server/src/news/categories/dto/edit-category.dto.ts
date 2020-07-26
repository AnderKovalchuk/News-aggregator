import { CategoryStatus } from "../entities/category-status.enum";

export class EditCategoryDto {
  title?: string;
  sign?: string;
  comment?: string;
  parent?: number;
  status ?: CategoryStatus;
}