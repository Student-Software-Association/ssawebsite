import Image from "next/image";
import type { Event } from "@/types/event";

type Props = { event: Event };

function formatEventDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function SeatsDisplay({ event }: { event: Event }) {
  const available = event.seats_total - event.seats_registered;
  return (
    <span
      className="text-white/70 text-[13px] md:text-[14px]"
      style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
    >
      Seats Available:{" "}
      <span className="text-white/90 font-medium">
        {available}/{event.seats_total}
      </span>
    </span>
  );
}

function BookButton({ url }: { url: string | null }) {
  if (!url) {
    return (
      <button
        disabled
        className="px-5 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-wide text-black/50 cursor-not-allowed"
        style={{ background: "#b89a3e", fontFamily: "Neue Montreal" }}
      >
        Sold Out
      </button>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-5 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-wide text-[#0a0c1a] transition-opacity hover:opacity-80 active:opacity-70"
      style={{ background: "#d4a843", fontFamily: "Neue Montreal" }}
    >
      Book My Ticket!
    </a>
  );
}

function ImagePanel({ event }: { event: Event }) {
  return (
    <div className="relative w-full h-full min-h-[220px] md:min-h-[280px] overflow-hidden">
      {event.image_url ? (
        <Image
          src={event.image_url}
          alt={event.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0b0f2e 0%, #111535 50%, #0d1028 100%)",
          }}
        />
      )}
      {/* bottom gradient overlay on image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,6,20,0.85) 0%, rgba(5,6,20,0.3) 45%, transparent 100%)",
        }}
      />
      {/* title overlay at bottom-left */}
      <div className="absolute bottom-0 left-0 p-4 md:p-6">
        <p
          className="text-white text-[18px] md:text-[22px] leading-snug"
          style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
        >
          {event.title}
        </p>
        {event.tagline && (
          <p
            className="text-white/65 text-[12px] md:text-[13px] mt-0.5"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            {event.tagline}
          </p>
        )}
      </div>
    </div>
  );
}

function DetailsPanel({ event }: { event: Event }) {
  return (
    <div
      className="flex flex-col justify-between p-5 md:p-7 lg:p-8"
      style={{
        background: "rgba(7, 9, 28, 0.97)",
        fontFamily: "Neue Montreal",
      }}
    >
      <div className="flex-1">
        {/* Event Details */}
        <div className="mb-5 md:mb-6">
          <h3
            className="text-white text-[15px] md:text-[16px] font-semibold mb-3"
            style={{ fontWeight: 600 }}
          >
            Event Details:
          </h3>
          <div className="space-y-1.5 text-[13px] md:text-[14px]">
            <p className="text-white/75">
              <span className="text-white/50">Time: </span>
              {event.time_start} &ndash; {event.time_end}
            </p>
            <p className="text-white/75">
              <span className="text-white/50">Date: </span>
              {formatEventDate(event.event_date)}
            </p>
            <p className="text-white/75">
              <span className="text-white/50">Location: </span>
              {event.location}
            </p>
            {event.speakers && (
              <p className="text-white/75">
                <span className="text-white/50">Speakers: </span>
                {event.speakers}
              </p>
            )}
          </div>
        </div>

        {/* Event Description */}
        {event.description && (
          <div>
            <h3
              className="text-white text-[15px] md:text-[16px] font-semibold mb-2"
              style={{ fontWeight: 600 }}
            >
              Event Description:
            </h3>
            <p
              className="text-white/65 text-[13px] md:text-[14px] leading-relaxed line-clamp-4"
              style={{ fontWeight: 400 }}
            >
              {event.description}
            </p>
          </div>
        )}
      </div>

      {/* CTA row */}
      <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-3">
        <BookButton url={event.eventbrite_url} />
        <SeatsDisplay event={event} />
      </div>
    </div>
  );
}

export default function EventCard({ event }: Props) {
  return (
    <article
      className="rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "rgba(7, 9, 28, 0.97)" }}
    >
      {/* ── Mobile / Tablet-sm: stacked (image top, details below) ── */}
      <div className="block md:hidden">
        <div className="h-[220px] relative">
          <ImagePanel event={event} />
        </div>
        <DetailsPanel event={event} />
      </div>

      {/* ── Tablet md–lg: side by side, image 45% ── */}
      <div className="hidden md:flex lg:hidden" style={{ minHeight: "280px" }}>
        <div className="relative w-[45%] flex-shrink-0">
          <ImagePanel event={event} />
        </div>
        <div className="flex-1 min-w-0">
          <DetailsPanel event={event} />
        </div>
      </div>

      {/* ── Desktop lg+: side by side, image 55% ── */}
      <div className="hidden lg:flex" style={{ minHeight: "300px" }}>
        <div className="relative w-[55%] flex-shrink-0">
          <ImagePanel event={event} />
        </div>
        <div className="flex-1 min-w-0">
          <DetailsPanel event={event} />
        </div>
      </div>
    </article>
  );
}
