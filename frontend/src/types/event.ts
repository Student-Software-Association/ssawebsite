export type Event = {
  id: string;
  slug: string;
  title: string;
  tagline: string | null;
  image_url: string | null;
  time_start: string;
  time_end: string;
  event_date: string;
  location: string;
  speakers: string | null;
  description: string;
  seats_total: number;
  seats_registered: number;
  eventbrite_url: string | null;
  is_published: boolean;
  created_at: string;
};
