import express from 'express';
import FornecedorRouter from './src/routes/fornecedor.routes.js';

const app = express();

app.use(express.json());
app.use(FornecedorRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});