/*
 * Footer Component (Responsive)
 * Desktop / Tablet / Mobile layouts in ONE file
 */

import Image from "next/image";

type FooterColumn = {
  title: string;
  links: { label: string; href?: string }[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Student Projects", href: "/studentproject" },
      { label: "Resources", href: "/resources" },
      { label: "Events", href: "/events" },
      { label: "Blogs", href: "/blogs" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "For Students",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Student Topics", href: "/topics" },
      { label: "Lorem", href: "#" },
      { label: "Lorem", href: "#" },
      { label: "Lorem", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Github Sheets", href: "#" },
      { label: "Project Guidelines", href: "#" },
      { label: "Lorem", href: "#" },
      { label: "Lorem", href: "#" },
      { label: "Lorem", href: "#" },
    ],
  },
  {
    title: "Data Control",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Data", href: "/cookies" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "@studentsoftware.org", href: "mailto:hello@studentsoftware.org" },
      { label: "axel@studentsoftware.org", href: "mailto:axel@studentsoftware.org" },
    ],
  },
];

const NAV = footerColumns[0];
const FOR_STUDENTS = footerColumns[1];
const RESOURCES = footerColumns[2];
const DATA_CONTROL = footerColumns[3];
const HELP = footerColumns[4];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(180deg, #02030a 0%, #070818 100%)",
      }}
    >
      {/* ========== DESKTOP (lg+) ========== */}
      <div className="hidden lg:block pr-[2rem] pl-[2rem] pt-[10rem] pb-[2rem]">
        {/* Top row: logo + 5 columns */}
        <div className="flex gap-16 justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/SSALogoWhite.webp"
              alt="Student Software Association"
              width={144}
              height={144}
              className="w-36 h-36 object-contain"
              priority={false}
            />
          </div>

          {/* Columns */}
          <div className="flex grid grid-cols-5 justify-items-end gap-1 pt-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-white/85 text-[20px] font-medium mb-4"
                style={{fontFamily: "Neue Montreal", fontWeight: 400}}>
                  {column.title}
                </h4>
                {column.links.map((link, i) => (
                  <a
                    key={`${link.label}-${i}`}
                    href={link.href ?? "#"}
                    style={{fontFamily: "Neue Montreal", fontWeight: 400}}
                    className="block text-[#A1A5AA] text-[16px] font-normal mb-2 hover:text-white/85 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social icons (RIGHT, above divider) */}
        <div className="mt-30 flex justify-end">
        

          <div className="flex items-center gap-4">
            <Image
              src="/Icons/footericons/Discord.svg"
              width={30}
              height={30}
              alt="Discord"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

            <Image
              src="/Icons/footericons/Github.svg"
              width={30}
              height={30}
              alt="GitHub"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

            <Image
              src="/Icons/footericons/Instagram.svg"
              width={30}
              height={30}
              alt="LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

            <Image
              src="/Icons/footericons/LinkedIn.svg"
              width={30}
              height={30}
              alt="Twitter"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

            <Image
              src="/Icons/footericons/Twitter(X).svg"
              width={30}
              height={30}
              alt="Instagram"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/15" />

        {/* Bottom row */}
        <div className="pt-7 flex items-center justify-between">
          <span className="text-white/35 text-[14px]">
            @StudentSoftwareAssociation
          </span>
          <span className="text-white/35 text-[14px] text-right">
            Designed with &lt;3 by SSA | Vancouver
          </span>
        </div>
      </div>

      {/* ========== TABLET (md - lg) ========== */}
      <div className="hidden md:block lg:hidden px-12 pt-16 pb-10">
        {/* Columns in 2-col grid like screenshot */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <h4 className="text-white/85 text-[22px] font-medium mb-5">
              {NAV.title}
            </h4>
            {NAV.links.map((l) => (
              <a
                key={l.label}
                href={l.href ?? "#"}
                className="block text-white/70 text-[18px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white/85 text-[22px] font-medium mb-5">
              {FOR_STUDENTS.title}
            </h4>
            {FOR_STUDENTS.links.map((l, i) => (
              <a
                key={`${l.label}-${i}`}
                href={l.href ?? "#"}
                className="block text-white/70 text-[18px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white/85 text-[22px] font-medium mb-5">
              {RESOURCES.title}
            </h4>
            {RESOURCES.links.map((l, i) => (
              <a
                key={`${l.label}-${i}`}
                href={l.href ?? "#"}
                className="block text-white/70 text-[18px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white/85 text-[22px] font-medium mb-5">
              {DATA_CONTROL.title}
            </h4>
            {DATA_CONTROL.links.map((l) => (
              <a
                key={l.label}
                href={l.href ?? "#"}
                className="block text-white/70 text-[18px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Help Center (full width like screenshot) */}
          <div className="col-span-2">
            <h4 className="text-white/85 text-[22px] font-medium mb-5">
              {HELP.title}
            </h4>
            {HELP.links.map((l) => (
              <a
                key={l.label}
                href={l.href ?? "#"}
                className="block text-white/70 text-[18px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Logo left + icons centered */}
        <div className="mt-16 flex items-end justify-between">
          <div>
            <Image
              src="/images/SSALogoWhite.webp"
              alt="Student Software Association"
              width={92}
              height={92}
              className="w-[92px] h-[92px] object-contain opacity-90"
            />
          </div>

          <div className="flex items-center gap-3">
          <Image
              src="/Icons/footericons/Instagram.svg"
              width={30}
              height={30}
              alt="LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

          <Image
              src="/Icons/footericons/Twitter(X).svg"
              width={30}
              height={30}
              alt="Instagram"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />    

            <Image
              src="/Icons/footericons/Discord.svg"
              width={30}
              height={30}
              alt="Discord"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

            <Image
              src="/Icons/footericons/LinkedIn.svg"
              width={30}
              height={30}
              alt="Twitter"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />


            <Image
              src="/Icons/footericons/Github.svg"
              width={30}
              height={30}
              alt="GitHub"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/15" />

        {/* Bottom row */}
        <div className="pt-7 flex items-center justify-between"
        style={{ fontFamily: "Neue Montreal"}}
        >
          <span className="text-white/35 text-[14px] ">
            @StudentSoftwareAssociation
          </span>
          <span className="text-white/35 text-[14px] text-right">
            Designed with &lt;3 by SSA | Vancouver
          </span>
        </div>
      </div>

      {/* ========== MOBILE (<md) ========== */}
      <div className="block md:hidden px-7 pt-14 pb-10">
        {/* 2-col grid for top sections (like screenshot) */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          <div>
            <h4 className="text-white/85 text-[20px] font-medium mb-4">
              {NAV.title}
            </h4>
            {NAV.links.map((l) => (
              <a
                key={l.label}
                href={l.href ?? "#"}
                className="block text-white/70 text-[16px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white/85 text-[20px] font-medium mb-4">
              {FOR_STUDENTS.title}
            </h4>
            {FOR_STUDENTS.links.map((l, i) => (
              <a
                key={`${l.label}-${i}`}
                href={l.href ?? "#"}
                className="block text-white/70 text-[16px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white/85 text-[20px] font-medium mb-4">
              {RESOURCES.title}
            </h4>
            {RESOURCES.links.map((l, i) => (
              <a
                key={`${l.label}-${i}`}
                href={l.href ?? "#"}
                className="block text-white/70 text-[16px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white/85 text-[20px] font-medium mb-4">
              {DATA_CONTROL.title}
            </h4>
            {DATA_CONTROL.links.map((l) => (
              <a
                key={l.label}
                href={l.href ?? "#"}
                className="block text-white/70 text-[16px] mb-2 hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Help Center (single column) */}
        <div className="mt-12">
          <h4 className="text-white/85 text-[20px] font-medium mb-4">
            {HELP.title}
          </h4>
          {HELP.links.map((l) => (
            <a
              key={l.label}
              href={l.href ?? "#"}
              className="block text-white/70 text-[16px] mb-2 hover:text-white/90 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Logo + icons row */}
        <div className="mt-14 flex items-end justify-between">
          <Image
            src="/images/SSALogoWhite.webp"
            alt="Student Software Association"
            width={64}
            height={64}
            className="w-12 h-12 object-contain opacity-90"
          />

          <div className="flex items-center gap-1.5">
          <Image
              src="/Icons/footericons/Instagram.svg"
              width={30}
              height={30}
              alt="LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

          <Image
              src="/Icons/footericons/Twitter(X).svg"
              width={30}
              height={30}
              alt="Instagram"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />    

            <Image
              src="/Icons/footericons/Discord.svg"
              width={30}
              height={30}
              alt="Discord"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />

            <Image
              src="/Icons/footericons/LinkedIn.svg"
              width={30}
              height={30}
              alt="Twitter"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />


            <Image
              src="/Icons/footericons/Github.svg"
              width={30}
              height={30}
              alt="GitHub"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/15" />

        {/* Bottom text stacked like screenshot */}
        <div className="pt-7">
          <div className="text-white/35 text-[14px]">
            @StudentSoftwareAssociation
          </div>
          <div className="mt-4 text-white/35 text-[14px]">
            Designed with &lt;3 by SSA | Vancouver
          </div>
        </div>
      </div>
    </footer>
  );
}