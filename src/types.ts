export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Łatwe' | 'Średnie' | 'Trudne';
  ingredients: string[];
  instructions: string[];
  rating: number;
}

export interface Shape {
  id: number;
  title: string;
  description: string;
  image: string;
  sizes: object[];
}