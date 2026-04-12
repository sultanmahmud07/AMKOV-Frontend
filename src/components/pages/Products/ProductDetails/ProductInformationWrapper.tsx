import { getProductSortInfo } from '@/services/product/product.service';
import ProductInfoTabs from './ProductInfoTabs';
import { IProduct } from '@/types/product.interface';

const ProductInformationWrapper = async ({ product }: { product: IProduct }) => {
      const queryString = `page=1&limit=8`;
      const allProducts = await getProductSortInfo(queryString);
      // console.log(allProducts);
      return (
            <ProductInfoTabs product={product} allProducts={allProducts?.data} />
      )
}

export default ProductInformationWrapper
