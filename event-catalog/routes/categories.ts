import { Request, Response } from "express";
import { CategoryDto } from "../dtos/categoryDto";
import { CategoryRepository } from "../repositories/categoryRepository";

export const getCategories = function (categoryRepository: CategoryRepository) {
  return async (_: Request, res: Response<CategoryDto[]>) => {
    const categories = await categoryRepository.getAllCategories();

    const categoryDtos: CategoryDto[] = categories.map((c) => ({
      categoryId: c.categoryId,
      name: c.name,
    }));

    res.json(categoryDtos);
  };
};
