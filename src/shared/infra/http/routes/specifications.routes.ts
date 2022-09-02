import { request, response, Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", (request, response) => {
  //const all = categoriesRepository.list();
  //return response.json(all);
});

export { specificationRoutes };
