import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, descripition } = request.body;

    await this.createCategoryUseCase.execute({ name, descripition });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
