import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import {
  addTaskControllerFactory,
  deleteTaskControllerFactory,
} from "../../../factories";

export default (router: Router): void => {
  router.post("/tasks", expressRouteAdapter(addTaskControllerFactory()));
  router.delete("/tasks", expressRouteAdapter(deleteTaskControllerFactory()));
};
