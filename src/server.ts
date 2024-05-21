import express, { Request, Response } from 'express';
// import emailRoutes from './routes/emailRoutes';
import route from './routes'
import { config } from "dotenv";
const cors = require('cors')
import { handleBadRequest } from './utils/utils';
config()

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/api", route);
// app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req: Request, res: Response) => {
    return handleBadRequest({
      res,
      code: 404,
      message: `Endpoint not found => [${req.url}]`,
    });
  });

export default app;
