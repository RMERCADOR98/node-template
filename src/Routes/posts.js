import { Router } from "express";

import { AllPosts, Create, Delete, Update } from "../Controllers/posts";

const router = Router();

router.get("/", AllPosts);
router.post("/createPost", Create);
router.delete("/:id", Delete);
router.put("/editPost/:id", Update);

export default router;
