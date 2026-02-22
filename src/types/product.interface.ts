export interface ICategory {
  _id: string
  name: string
  slug: string
  metaTitle: string
  metaDescription: string
  image: string
  visibility: {
    isActive: boolean
    navbar: boolean
    homepage: boolean
  }
  productCount: number
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
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

export interface IProduct {
  _id: string
  name: string
  slug: string
  sku: string
  categories: ICategory[]
  images: string[]
  price: number
  discount: IDiscount
  currency: string
  description: IDescription
  specification: ISpecification[]
  userGuide: string
  installationGuide: string
  license: string
  tags: string[]
  viewOnRootPage: boolean
  visibility: boolean
  searchPriority: number
  inStock: string
  meta: IMeta
  isDeleted: boolean
  minimumOrderQuantity: number
  createdAt: string
  updatedAt: string
  __v: number
}
