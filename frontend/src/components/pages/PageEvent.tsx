import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import EventPageHero from "@/components/features/EventFeatures/EventPageHero";
import EventsListSection from "@/components/features/EventFeatures/EventsListSection";
import EventsCTASection from "@/components/features/EventFeatures/EventsCTASection";
import { listPublishedEvents } from "@/lib/supabase/event-queries";

type Props = {
  page: number;
};

export default async function PageEvent({ page }: Props) {
  const { events, total } = await listPublishedEvents(page);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Neue Montreal', sans-serif",
        background: "#02030a",
      }}
    >
      <Header />
      <EventPageHero />
      <EventsListSection events={events} total={total} page={page} />
      <EventsCTASection />
      <Footer />
    </div>
  );
}
