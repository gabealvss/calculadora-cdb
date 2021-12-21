/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable prefer-const */
import { inject, injectable } from "tsyringe";

import { ICalculatorDTO } from "../DTOs/ICalculatorDTO";
import { ITradesRepository } from "../repositories/ITradesRepository";

@injectable()
class CalculatorUseCase {
  constructor(
    @inject("TradesRepository")
    private tradesRepository: ITradesRepository
  ) {}

  async execute({
    investmentDate,
    cdbRate,
    currentDate,
  }: ICalculatorDTO): Promise<any> {
    const CDITaxaHistory = [];

    const trade = await this.tradesRepository.find(investmentDate, currentDate);

    CDITaxaHistory.push(trade);

    const listPriceCDB = trade.map((item, indice) => {
      const tcdi = (
        Math.pow(Number(item.dlasttradeprice) / 100 + 1, 1 / 252) - 1
      ).toFixed(8);

      const accumulated =
        Math.pow(1, indice) *
        Number((1 + (Number(tcdi) * cdbRate) / 100).toFixed(16));

      const priceUnitCDB = (1000 * accumulated).toFixed(2);

      return {
        date: item.dtdate,
        priceUnit: priceUnitCDB,
      };
    });

    return listPriceCDB;
  }
}

export { CalculatorUseCase };
