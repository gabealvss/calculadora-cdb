import "reflect-metadata";
import "./containers";
import { app } from "./infra/http";

app.listen(5000, () => {
  console.log("Server running in port 5000");
});
