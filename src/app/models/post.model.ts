export interface Post {
  type: string;
  title?: string;
  description?: string;
  // Article
  primaryImage?: ImageData;
  images?: ImageData[];
}
