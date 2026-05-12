import ProductInfoTabs from './ProductInfoTabs';
import { IProduct } from '@/types/product.interface';

const ProductInformationWrapper = async ({ product }: { product: IProduct }) => {
      return (
            <ProductInfoTabs product={product} />
      )
}

export default ProductInformationWrapper
