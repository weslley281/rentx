import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

//lista as categorias
specificationRoutes.get("/", (request, response) => {
  //const all = categoriesRepository.list();
  //return response.json(all);
});

export { specificationRoutes };
