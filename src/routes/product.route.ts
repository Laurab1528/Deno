import { Router } from "../deps";
import * as ProductHandlers from '../handler/product.handler';

const router = new Router({
    prefix: "/products",
  });
  
router.get("/", ProductHandlers.getProducts);
router.get("/:id", ProductHandlers.getProduct);
router.post("/", ProductHandlers.createProduct);
router.patch("/:id", ProductHandlers.updateProduct);
router.delete("/:id", ProductHandlers.deleteProduct);

export default router;