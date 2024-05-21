import express from 'express';
import emailRoutes from './routes/emailRoutes';

const app = express();
let PORT = 8000
app.use(express.json());
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
