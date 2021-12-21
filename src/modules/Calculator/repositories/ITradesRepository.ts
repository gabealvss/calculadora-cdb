import { trades } from "@prisma/client";

interface ITradesRepository {
  find(investmentDate: string, currentDate: string): Promise<trades[]>;
}

export { ITradesRepository };
