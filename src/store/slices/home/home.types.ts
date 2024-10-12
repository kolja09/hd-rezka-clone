export type CategoriesStateType = {
  categories: TCategoreis[];
  searchFilms: TSearchFilms[];
};

export type TCategoreis = {
  id: number;
  name: string;
  type: string;
  subCategories: TCategoreis[];
};

export type TSearchFilms = {
  title: string;
  type: string;
  year: number | string;
  rating: number | null;
  numberOfVotes?: number;
};
