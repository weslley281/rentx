import { Category } from "../entities/category";

interface ICreateCategoryDTO {
  name: string;
  descripition: string;
}

interface ICaregoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, descripition }: ICreateCategoryDTO): Promise<void>;
}

export { ICaregoriesRepository, ICreateCategoryDTO };
