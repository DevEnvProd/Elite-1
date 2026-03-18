export interface Review {
  id: string;
  name: string;
  rating: number;
  image: string;
  description: string;
  established: string;
  license: string;
  games: string[];
  payoutSpeed: string;
  pros: string[];
  cons: string[];
  review: string;
}

export interface Guide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  difficulty: string;
  excerpt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}
