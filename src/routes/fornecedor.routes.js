import fornecedorController from "../controller/fornecedor.controller.js";
import { Router } from "express";

const FornecedorRouter = Router();

FornecedorRouter.post("/fornecedores", fornecedorController.createFornecedorController);
FornecedorRouter.get("/fornecedores", fornecedorController.findAllFornecedoresController);
FornecedorRouter.get("/fornecedores/:id", fornecedorController.findFornecedorByIdController);
FornecedorRouter.put("/fornecedores/:id", fornecedorController.updateFornecedorController);
FornecedorRouter.delete("/fornecedores/:id", fornecedorController.deleteFornecedorController);

export default FornecedorRouter;
