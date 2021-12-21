import { PrismaClient, trades } from "@prisma/client";

import { ITradesRepository } from "../ITradesRepository";

class TradesRepository implements ITradesRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async find(investmentDate: string, currentDate: string): Promise<trades[]> {
    const trades = await this.client.trades.findMany({
      where: {
        dtdate: {
          gte: investmentDate,
          lt: currentDate,
        },
      },
      orderBy: {
        dtdate: "desc",
      },
    });

    return trades;
  }
}

export { TradesRepository };
