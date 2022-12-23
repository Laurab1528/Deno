import { Application} from "./deps";
import ProductRoute from './routes/product.route';
import { logger } from "./middleware/logger.middleware";

import './configs/db.config.ts';

const PORT = 4343;
const app = new Application();

app.use(logger);
app.use(ProductRoute.routes());

console.log(`Server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });