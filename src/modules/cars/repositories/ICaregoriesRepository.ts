import { Category } from "../entities/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICaregoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICaregoriesRepository, ICreateCategoryDTO };
