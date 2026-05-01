import { Post, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    name: 'HTML Basics',
    icon: 'html',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'The skeleton of your website! Learn how to add text, images, and buttons.',
    slug: 'html'
  },
  {
    name: 'Styling with CSS',
    icon: 'css',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Make it pretty! Add colors, cool fonts, and fun layouts to your creation.',
    slug: 'css'
  },
  {
    name: 'JS Magic',
    icon: 'javascript',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100',
    description: 'Bring it to life! Add animations, games, and interactivity to your site.',
    slug: 'js'
  }
];

export const POSTS: Post[] = [
  {
    id: 'html-skeleton',
    category: 'HTML',
    title: 'HTML: The Skeleton of the Web',
    excerpt: 'Every website you visit is built upon a structure called HTML. Think of it as the blueprints that hold everything together.',
    content: 'HTML uses "tags" to label different types of content. Most tags come in pairs: an opening tag and a closing tag.',
    readTime: '5 min read',
    level: 'Beginner',
    xp: 50,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'css-colors',
    category: 'CSS',
    title: 'CSS: Adding Style and Color',
    excerpt: 'Master the art of visual design by learning how to manipulate colors, typography, and modern layouts with CSS.',
    content: 'Colors define the personality of your interface. In CSS, you can apply colors using named keywords, HEX codes, or RGB values.',
    readTime: '8 min read',
    level: 'Beginner',
    xp: 60,
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'js-interactivity',
    category: 'JS',
    title: 'JS: Making Things Move!',
    excerpt: 'Imagine your website as a house. HTML is the structure, CSS is the paint, but JavaScript? It is the electricity and the plumbing.',
    content: 'JavaScript allows you to create interactive experiences. A simple function can trigger a world of possibilities.',
    readTime: '10 min read',
    level: 'Intermediate',
    xp: 75,
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800'
  }
];
