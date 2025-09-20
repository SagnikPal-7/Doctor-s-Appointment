import express from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDoctor);
// For login, do NOT use multer
adminRouter.post("/login", loginAdmin);

export default adminRouter;
