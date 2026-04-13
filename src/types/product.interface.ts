export interface ICategory {
 _id: string;
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  order?: string; 
  visibility?: boolean; 
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ISpecification {
  key: string
  value: string
  _id: string
}

export interface IDiscount {
  fixedAmount: number
  percentage: number
}

export interface IDescription {
  short: string
  long: string
}
export interface IMeta {
  title: string
  description: string
}

export interface ISpecification {
  name: string;
  value: string;
}

export interface IVariation {
  color: string;
  stock: number;
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  bulletPoints: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
  specifications: ISpecification[];
  images: string[];
  video?: string;
  deleteImages: string[];
  isFeatured: boolean;
  isMenu: boolean;
  isTrendy: boolean;
  orderBy: number;
  featureImages: string[];
  basePrice: number;
  variations: IVariation[];
  category: ICategory; 
  createdAt: string; 
  updatedAt: string; 
  __v: number;
}

// Optional: If you want to type the entire API response wrapper
export interface IProductResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: IProduct;
}
