import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  descripition: string;
}
interface ISpecificationRepository {
  create({ descripition, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
