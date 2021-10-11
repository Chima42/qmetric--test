type ItemWeightType = "variable" | "fixed"

export type AvailableItemProps = {
  name: string;
  totalAddedToCart: number;
  price: number;
  id: number;
  imageSrc: string;
  description: string;
  discounted: boolean;
  discount?: string;
  weightType: ItemWeightType;
  weightAdded?: number;
  cartId?: string;
  savings: number;
}