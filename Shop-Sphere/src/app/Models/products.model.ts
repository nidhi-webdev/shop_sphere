export interface PRODUCTS {
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

export interface Rating {
    rate: number,
    count: number
}

export interface CARTPRODUCT {
  product: PRODUCTS;
  quantity: number;
}