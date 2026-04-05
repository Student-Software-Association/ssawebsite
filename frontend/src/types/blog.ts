export type BlogPost = {
  id: string;
  slug: string;
  hero_title: string;
  article_title: string | null;
  content_html: string;
  published_at: string;
  author_name: string;
  author_role: string;
  author_avatar_url: string | null;
  hero_image_url: string | null;
  card_image_url: string | null;
};
