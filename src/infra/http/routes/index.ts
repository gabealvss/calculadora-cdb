import { Router } from "express";

import { CalculatorController } from "../../../modules/Calculator/useCases/CalculatorController";

const router = Router();
const calculatorController = new CalculatorController();

router.get("/calculator", calculatorController.handle);

export { router };
