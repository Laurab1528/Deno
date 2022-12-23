import { MongoClient } from "../deps";
import { Product } from "../types/product.type";

const client = new MongoClient();

try {
    await client.connect("mongodb://127.0.0.1:27017");
    console.log("🆗 Conectados a MongoDB");
} catch (error) {
    console.log(error);
}

const db = client.database('deno');

export const products = db.collection<Product>('products');