export interface Product {
  name: string;
  discount?: string;
  compareAt?: string;
  price: string;
  /** Emoji glyphs pulled from the product name, used for the placeholder tile. */
  emoji?: string;
}

export interface ProductSection {
  title: string;
  items: Product[];
}

export interface Category {
  name: string;
  href: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  product: string;
  hasLink?: boolean;
}
