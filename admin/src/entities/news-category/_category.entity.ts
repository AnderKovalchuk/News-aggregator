import { ECategoryStatus } from "./_category-status.enum";

export default interface ICategory {
  id: number;
  title: string;
  sign: string;
  comment?: string;
  parent?: number;
  status: ECategoryStatus;
  children?: ICategory[];
}