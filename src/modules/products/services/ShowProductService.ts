import AppError from "../../../shared/errors/AppError";
import { productRepositories } from "../database/repositories/ProductsRepositories";
import { Product } from "../database/entities/Products";





interface IShowPRoduct{
  id: string;
}


export default class SHowProductService{
  async execute({ id }: IShowPRoduct): Promise<Product>{
    const product = await productRepositories.findById(id);

    if (!product) {
      throw new AppError('Product not found', 404);
    }
    return product;
  }
}
