type ItemWeightType = "variable" | "fixed"

export interface IAvailableItemProps {
  name: string;
  totalAddedToCart: number;
  price: number;
  id: number;
  imageSrc: string;
  description: string;
  cartId: string;
  discounted: boolean;
  multiplier: number;
}

export interface IDiscountedItemProps extends IAvailableItemProps {
  discountLabel: string;
  discount: (addedToCart: number, multiplier: number, savingPerItem: number) => number;
  savingPerItem: number;
  totalSavings: number;
}

export interface IVariableItemProps extends IAvailableItemProps {
  weightType: ItemWeightType;
  weightAdded: number;
}

export type AvailableItemProps = {
  name: string;
  totalAddedToCart: number;
  price: number;
  id: number;
  imageSrc: string;
  description: string;
  discounted: boolean;
  discountLabel?: string;
  discount?: (addedToCart: number) => number;
  weightType: ItemWeightType;
  weightAdded?: number;
  cartId?: string;
  savings: number;
}