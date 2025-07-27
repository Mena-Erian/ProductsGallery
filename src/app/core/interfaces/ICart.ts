export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: IProductMetaData[];
  __v: number;
}

export interface IProductMetaData {
  productId: number;
  quantity: number;
}
