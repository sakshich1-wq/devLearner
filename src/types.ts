export interface Post {
  id: string;
  category: 'HTML' | 'CSS' | 'JS';
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  image: string;
}

export interface Category {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  slug: string;
}
