import { Router } from "express";

import { AllUsers } from "../Controllers/users";

const authRouter = Router();

authRouter.get("/users", AllUsers);

export default authRouter;
