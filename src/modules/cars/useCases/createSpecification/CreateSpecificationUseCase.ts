import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest{
    name: string;
    descripition: string;
}

class CreateSpecificationUseCase{
    constructor(private specificationRepository: ISpecificationRepository){

    }

    execute({name, descripition}: IRequest): void{
        const specificationAlredyExists = this.specificationRepository.findByName(name);

        if(specificationAlredyExists){
            throw new Error("Specification Already Exixits");
        }
        this.specificationRepository.create({
            name,
            descripition,
        })
    }
}

export { CreateSpecificationUseCase };