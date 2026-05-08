import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = express.Router();

//GET all wines
router.get("/", wineController.getAll);

//GET wine by id
router.get("/:id", wineController.getById);

router.post('/', wineController.create);

router.put('/:id', wineController.update);

router.delete('/:id', wineController.remove);

export default router;
