import { Response, Request, NextFunction } from "express";
import moment, { invalid } from "moment";

function CheckFields(request: Request, response: Response, next: NextFunction) {
  const { investmentDate, cdbRate, currentDate } = request.body;

  const isTypeDateInvestmentDate = moment(investmentDate, "YYYY-MM-DD", true);
  const isTypeDateCurrentDate = moment(currentDate, "YYYY-MM-DD", true);

  if (!isTypeDateInvestmentDate.isValid()) {
    return response
      .status(400)
      .json({ error: "Argument `investment date` is invalid." });
  }

  if (!isTypeDateCurrentDate.isValid()) {
    return response
      .status(400)
      .json({ error: "Argument `current date` is invalid." });
  }

  if (typeof cdbRate !== "number") {
    return response
      .status(400)
      .json({ error: "Argument `cdb rate` is invalid." });
  }

  if (+new Date(currentDate) < +new Date(investmentDate)) {
    return response.status(400).json({
      error:
        "Date error `current date` must be greater than `investment date`.",
    });
  }

  return next();
}

export { CheckFields };
