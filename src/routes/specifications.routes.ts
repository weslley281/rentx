import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();


specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

//lista as categorias
specificationRoutes.get("/", (request, response) => {
    //const all = categoriesRepository.list();

    //return response.json(all);
});

export {specificationRoutes};