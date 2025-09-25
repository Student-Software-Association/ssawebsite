import Link from "next/link";
import { DefaultBody } from "@/utils/Fonts";

const NavLinks = () => {
  const navItems = [
    { href: "/student-projects", label: "Student Projects" },
    { href: "/resources", label: "Resources" },
    { href: "/events", label: "Events" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" }
  ];

  return (
    <div className="max-xl:hidden absolute left-0 right-0 flex flex-row justify-center gap-x-6 my-8 mx-auto w-fit items-center text-white text-lg">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={`group inline-block ${DefaultBody.className} font-medium`}>
          <span className="relative inline-block text-white">
            {item.label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;