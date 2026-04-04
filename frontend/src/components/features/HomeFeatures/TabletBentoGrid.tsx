import Image from "next/image";

/* gray mini icons */
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
}

function TabletBentoCard({
  title,
  description,
  icon,
  imageSrc,
}: BentoCardProps) {
  return (
    <div
      className="relative rounded-2xl p-6 border border-[#606167] flex flex-col h-full hover:border-white/20 transition-colors overflow-hidden"
    >
      {/* TEXT SECTION */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-[2px]">
            <Image
              src={icon}
              alt=""
              width={20}
              height={20}
              className="opacity-80"
            />
          </div>

          <h3 className="text-white text-lg font-semibold leading-tight"
          style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 500 }}
          >
            {title}
          </h3>
        </div>

        <p className="text-white/60 text-sm leading-relaxed max-w-[90%]"
                  style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 100 }}
        >
          {description}
        </p>
      </div>

      {/* IMAGE AREA */}
      {imageSrc && (
        <div className="mt-0 flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[320px] h-[170px]">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-contain"
              sizes="320px"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function TabletBentoGrid() {
    const cards = [
        {
          title: <>Collaborate on <u>Real Projects</u></>,
          description:
            "Level up your skills through hands-on, student-led software projects that mirror real-world work.",
          icon: CollaborateIcon,
          imageSrc: "/Icons/CollaborateRealProjects.svg",
        },
        {
          title: <>Get Feedback That Helps You <u>Grow</u></>,
          description:
            "Receive code reviews and mentorship from experienced peers. Build better with every commit.",
          icon: FeedIcon,
          imageSrc: "/Icons/GetFeedbackHelpsGrow.svg",
        },
        {
          title: <>Match with The <u>Right Team</u></>,
          description:
            "Work with peers who share your interests and complement your skill set — your squad, your way.",
          icon: MatchIcon,
          imageSrc: "/Icons/MatchRighTeam.svg",
        },
        {
          title: <><u>Write & Share</u> Tech Blogs</>,
          description:
            "Document your journey, share your insights, and build your developer voice through writing.",
          icon: TechIcon,
          imageSrc: "/Icons/WriteshareBlogs.svg",
        },
        {
          title: <>Start in <u>Under a Week</u></>,
          description:
            "Don't wait around. We'll match you with a project team in just days — no long application process.",
          icon: StartIcon,
          imageSrc: "/Icons/StartUnderWeek.svg",
        },
        {
          title: <>Meet Developers <u>Like You</u></>,
          description:
            "Whether you're a designer, dev, or explorer — you'll connect with others who get it.",
          icon: MeetDevsIcon,
          imageSrc: "/Icons/MeetDevsLikeYou.svg",
        },
      ];

  return (
    <section>

      {/* Section heading */}
      <div className="text-left px-8  mb-16">
            <h2
              className="text-white font-medium leading-tight"
              style={{ fontFamily: "Neue Montreal", fontSize: "clamp(45px, 4.5vw, 50px)", letterSpacing: "-0.02em", fontWeight: 400}}>
              Code Together,<br /><span style={{ fontFamily: "'Neue Montreal'", fontWeight: 600,  fontSize: "clamp(50px, 4.5vw, 50px)",}}> Grow Together.</span>
            </h2>
            <p
              className="text-white text-[18px] font-normal mt-6 mr-auto"
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


    <div className="grid grid-cols-2 gap-6 auto-rows-[260px]">
      {/* Row 1: full width */}
      <div className="col-span-2">
        <TabletBentoCard {...cards[0]} />
      </div>

      {/* Row 2 */}
      <TabletBentoCard {...cards[1]} />
      <div className="row-span-2">
        <TabletBentoCard {...cards[2]} />
      </div>

      {/* Row 3 */}
      <TabletBentoCard {...cards[3]} />

      {/* Row 4 */}
      <TabletBentoCard {...cards[4]} />
      <TabletBentoCard {...cards[5]} />
    </div>

    </section>
  );
}