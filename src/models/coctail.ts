export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface CoctailCategory {
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
}

export interface CoctailListResponse {
  drinks: Cocktail[];
}

export interface CategoryListResponse {
  drinks: CoctailCategory[];
}

export enum CategoryType {
  ListByCategories = 'List by Categories',
  ListByGlasses = 'List by Glasses',
  ListByAchocolicNonalchocolic = 'Alcoholic / Nonalcoholic',
}

export interface SingleTab {
  name: CategoryType;
  selected: boolean;
  keyChar: string;
}
export interface TabsData {
  tabs: SingleTab[];
}

export interface CoctailDetail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  'strInstructionsZH-HANS': string;
  'strInstructionsZH-HANT': string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: null;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: Date;
}
export interface CoctailDetailResponse {
  drinks: CoctailDetail[];
}
