type ItemWeightType = "variable" | "fixed"

export type ItemProps = {
  name: string;
  amount: number;
  id: number;
  imageSrc: string;
  description: string;
  discounted: boolean;
  discount?: string;
  weightType: ItemWeightType;
}