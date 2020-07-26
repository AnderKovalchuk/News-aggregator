import { CategoryStatus } from "./category-status.enum";

export class Category {
  id: number;
  title: string;
  sign: string;
  comment?: string;

  parent?: number;
  status?: CategoryStatus = CategoryStatus.draft;
}