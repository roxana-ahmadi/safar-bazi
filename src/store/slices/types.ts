export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: ICategory;
}

export interface IProductState {
  data: IProduct[];
}

export interface IGetProductsParams {
  title?: string;
  creationAtMin?: Date;
  creationAtMax?: Date;
  offset?: number;
  limit?: number;
}
