export type CategoriesStateType = {
  categories: TCategoreis[];
};

export type TCategoreis = {
  id: number;
  name: string;
  type: string;
  subCategories: TCategoreis[];
};
