import { container } from "tsyringe";

import { TradesRepository } from "../modules/Calculator/repositories/implementations/TradesRepository";
import { ITradesRepository } from "../modules/Calculator/repositories/ITradesRepository";

container.registerSingleton<ITradesRepository>(
  "TradesRepository",
  TradesRepository
);
