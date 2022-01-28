import { Category } from "../entities/category";

export interface CategoryRepository {
  getAllCategories(): Promise<Category[]>;
  getCategoryById(categoryId: string): Promise<Category | undefined>;
}
