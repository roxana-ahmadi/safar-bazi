export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface ITableData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: ICategory;
}
