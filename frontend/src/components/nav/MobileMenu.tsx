import Link from "next/link";
import { X } from "lucide-react";
import { LinkText, Span } from "../Typographies";
import StyledButton from "../StyledButton";

interface MobileMenuProps {
  showOverlay: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const MobileMenu = ({ showOverlay, setMobileMenuOpen }: MobileMenuProps) => {
  const mobileNavItems = [
    { href: "/student-projects", label: "Student Projects ↗" },
    { href: "/resources", label: "Resources ↗" },
    { href: "/events", label: "Events ↗" },
    { href: "/blogs", label: "Blogs ↗" },
    { href: "/about", label: "Company ↗" }
  ];

  if (!showOverlay) return null;

  return (
    <div className="xl:hidden fixed inset-0 z-40 flex justify-center bg-black/50 backdrop-blur-sm pt-10">
      <div className="bg-white rounded-3xl rounded-tr-none border-2 border-gray-300 shadow-2xl max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto h-fit relative">

        <div className="flex flex-col items-center p-8 pt-12">
          <button
            className="absolute top-4 right-4 z-10 text-gray-600 hover:text-black text-2xl transition-colors duration-200"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col w-full mt-4 ">
            {mobileNavItems.map((item, index) => (
              <div key={item.href}>
                <LinkText
                  href={item.href}
                  className="text-black no-underline hover:underline font-normal text-2xl py-2 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </LinkText>
                <div className="w-full h-px bg-black" />
              </div>
            ))}


            <div className="flex justify-between items-center w-full mt-6">
              <LinkText
                href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
                external
                className="text-black underline text-sm font-bold hover:text-gray-600 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join the Discord
              </LinkText>

              <Link
                href="mailto:admin@studentsoftware.org"
              >
                <StyledButton size="md" variant="double-outline" spanColor="black" className="bg-black text-sm">
                  Contact Us!
                </StyledButton>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;