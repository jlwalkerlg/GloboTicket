import { Category } from "../entities/category";
import { CategoryRepository } from "./categoryRepository";

const categories: Record<string, Category> = {
  "b0788d2f-8003-43c1-92a4-edc76a7c5dde": {
    categoryId: "b0788d2f-8003-43c1-92a4-edc76a7c5dde",
    name: "Concerts",
  },
  "6313179f-7837-473a-a4d5-a5571b43e6a6": {
    categoryId: "6313179f-7837-473a-a4d5-a5571b43e6a6",
    name: "Musicals",
  },
  "bf3f3002-7e53-441e-8b76-f6280be284aa": {
    categoryId: "bf3f3002-7e53-441e-8b76-f6280be284aa",
    name: "Plays",
  },
  "fe98f549-e790-4e9f-aa16-18c2292a2ee9": {
    categoryId: "fe98f549-e790-4e9f-aa16-18c2292a2ee9",
    name: "Conferences",
  },
};

export class InMemoryCategoryRepository implements CategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    return Object.values(categories);
  }

  async getCategoryById(categoryId: string): Promise<Category | undefined> {
    return categories[categoryId];
  }
}
