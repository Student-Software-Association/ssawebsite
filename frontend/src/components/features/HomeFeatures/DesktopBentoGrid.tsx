import Image from "next/image";

export const CollaborateIcon = "/Icons/miniIcons/CollaborateIcon.svg";
export const FeedIcon = "/Icons/miniIcons/FeedbackIcon.svg";
export const MatchIcon = "/Icons/miniIcons/MatchIcon.svg";
export const MeetDevsIcon = "/Icons/miniIcons/MeetDevsIcon.svg";
export const StartIcon = "/Icons/miniIcons/StartIcon.svg";
export const TechIcon = "/Icons/miniIcons/TechIcon.svg";

interface BentoCardProps {
  title: string;
  description: string;
  icon: string;
  imageSrc?: string;
  imagePosition?: "corner" | "under";
  imageWidth?: number;
  imageHeight?: number;
}

function BentoCard({
  title,
  description,
  icon,
  imageSrc,
  imagePosition = "corner",
  imageWidth,
  imageHeight,
}: BentoCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-8 border border-[#606167] flex flex-col justify-between h-full hover:border-white/20 transition-colors"
    >
      <div className="relative z-10">
        {/* Heading row with tiny icon */}
        <div className="flex items-start gap-3 mb-2">
          <div className="shrink-0 text-white/80">
            <Image
              src={icon}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain opacity-80"
            />
          </div>

          <h3
            className="text-white text-[17px] leading-tight"
            style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 500 }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-[#828282] text-[13px] leading-relaxed w-auto"
          style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 100 }}
          >
          {description}
        </p>
      </div>

      {imageSrc && imagePosition === "corner" && (
        <div className="relative  pointer-events-none select-none">
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth ?? 260}
            height={imageHeight ?? 260}
            className="w-[250px] mx-auto"
            priority
          />
        </div>
      )}

      {imageSrc && imagePosition === "under" && (
        <div className="relative -top-0 pointer-events-none select-none">
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth ?? 320}
            height={imageHeight ?? 240}
            className="w-auto h-auto mx-auto object-contain"
            priority
          />
        </div>
      )}
    </div>
  );
}

export default function DesktopBentoGrid() {
  const cards = [
    {
      title: "Collaborate on Real Projects",
      description:
        "Level up your skills through hands-on, student-led software projects that mirror real-world work.",
      icon: CollaborateIcon,
      imageSrc: "/Icons/CollaborateRealProjects.svg",
      imagePosition: "corner" as const,
    },
    {
      title: "Match with The Right Team",
      description:
        "Work with peers who share your interests and complement your skill set — your squad, your way.",
      icon: MatchIcon,
      imageSrc: "/Icons/MatchRighTeam.svg",
      imagePosition: "under" as const,
      imageWidth: 260,
      imageHeight: 260,
    },
    {
      title: "Start in Under a Week",
      description:
        "Don't wait around. We'll match you with a project team in just days — no long application process.",
      icon: StartIcon,
      imageSrc: "/Icons/StartUnderWeek.svg",
      imagePosition: "under" as const,
    },
    {
      title: "Get Feedback That Helps You Grow",
      description:
        "Document your journey, share your insights, and build your developer voice through writing.",
      icon: FeedIcon,
      imageSrc: "/Icons/GetFeedbackHelpsGrow.svg",
      imagePosition: "under" as const,
      imageWidth: 260,
      imageHeight: 260,
    },
    {
      title: "Meet Developers Like You",
      description:
        "Receive code reviews and mentorship from experienced peers. Build better with every commit.",
      icon: MeetDevsIcon,
      imageSrc: "/Icons/MeetDevsLikeYou.svg",
      imagePosition: "under" as const,
      imageWidth: 260,
      imageHeight: 260,
    },
    {
      title: "Write & Share Tech Blogs",
      description:
        "Whether you're a designer, dev, or explorer — you'll connect with others who get it.",
      icon: TechIcon,
      imageSrc: "/Icons/WriteshareBlogs.svg",
      imagePosition: "under" as const,
      imageWidth: 260,
      imageHeight: 260,
    },
  ];

  return (

    <section>

      {/* Section heading */}
      <div className="text-center px-16 mb-16">
            <h2
              className="text-white font-medium leading-tight"
              style={{
                fontFamily: "Neue Montreal",
                fontSize: "clamp(44px, 4.5vw, 50px)",
                letterSpacing: "-0.02em",
              }}
            >
              Code Together,<br /><span style={{ fontFamily: "'Neue Montreal'", fontWeight: 600,  fontSize: "clamp(44px, 4.5vw, 70px)",}}> Grow Together.</span>
            </h2>
            <p
              className="text-white text-[22px] font-normal mt-6 mx-auto"
              style={{
                fontFamily: "'Neue Montreal'",
                fontWeight: 200,
                maxWidth: "680px",
                lineHeight: "1.5",
              }}
            >
              A student-run community for designers, builders, and devs, focused on real projects, collaboration, and growth without the fluff.
            </p>
          </div>

    <div className="grid grid-cols-4 gap-6 auto-rows-[280px]">
      {/* Card 1: 2 cols × 1 row */}
      <div className="col-span-2 row-span-1">
        <BentoCard
          title={cards[0].title}
          description={cards[0].description}
          icon={cards[0].icon}
          imageSrc={cards[0].imageSrc}
          imagePosition={cards[0].imagePosition}
          imageWidth={cards[0].imageWidth ?? 260}
          imageHeight={cards[0].imageHeight ?? 260}
        />
      </div>

      {/* Card 2: 1 col × 2 rows */}
      <div className="col-span-1 row-span-2">
        <BentoCard
          title={cards[1].title}
          description={cards[1].description}
          icon={cards[1].icon}
          imageSrc={cards[1].imageSrc}
          imagePosition={cards[1].imagePosition}
          imageWidth={cards[1].imageWidth ?? 260}
          imageHeight={cards[1].imageHeight ?? 260}
        />
      </div>

      {/* Card 3: 1 col × 1 row */}
      <div className="col-span-1 row-span-1">
        <BentoCard
          title={cards[2].title}
          description={cards[2].description}
          icon={cards[2].icon}
          imageSrc={cards[2].imageSrc}
          imagePosition={cards[2].imagePosition}
          imageWidth={cards[2].imageWidth ?? 260}
          imageHeight={cards[2].imageHeight ?? 260}
        />
      </div>

      {/* Card 4: 2 cols × 2 rows */}
      <div className="col-span-2 row-span-2">
        <BentoCard
          title={cards[3].title}
          description={cards[3].description}
          icon={cards[3].icon}
          imageSrc={cards[3].imageSrc}
          imagePosition={cards[3].imagePosition}
          imageWidth={cards[3].imageWidth ?? 260}
          imageHeight={cards[3].imageHeight ?? 260}
        />
      </div>

      {/* Card 5: 1 col × 2 rows */}
      <div className="col-span-1 row-span-2">
        <BentoCard
          title={cards[4].title}
          description={cards[4].description}
          icon={cards[4].icon}
          imageSrc={cards[4].imageSrc}
          imagePosition={cards[4].imagePosition}
          imageWidth={cards[4].imageWidth ?? 260}
          imageHeight={cards[4].imageHeight ?? 260}
        />
      </div>

      {/* Card 6: 1 col × 1 row */}
      <div className="col-span-1 row-span-1">
        <BentoCard
          title={cards[5].title}
          description={cards[5].description}
          icon={cards[5].icon}
          imageSrc={cards[5].imageSrc}
          imagePosition={cards[5].imagePosition}
          imageWidth={cards[5].imageWidth ?? 260}
          imageHeight={cards[5].imageHeight ?? 260}
        />
      </div>
    </div>
    </section>
  );
}