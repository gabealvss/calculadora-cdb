import { Router } from "express";

import { CalculatorController } from "../../../modules/Calculator/useCases/CalculatorController";
import { CheckFields } from "../middlewares/CheckFields";

const router = Router();
const calculatorController = new CalculatorController();

router.get("/calculator", CheckFields, calculatorController.handle);

export { router };
