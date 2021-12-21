import { Request, Response } from "express";
import { container } from "tsyringe";

import { CalculatorUseCase } from "./CalculatorUseCase";

class CalculatorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { investmentDate, cdbRate, currentDate } = request.body;

    const calculatorUseCase = container.resolve(CalculatorUseCase);
    const result = await calculatorUseCase.execute({
      investmentDate,
      cdbRate,
      currentDate,
    });

    return response.status(200).json(result);
  }
}

export { CalculatorController };
