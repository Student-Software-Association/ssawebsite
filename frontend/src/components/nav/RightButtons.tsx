import { X } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import { LinkText } from "../Typographies";
import { DefaultBody } from "@/utils/Fonts";
import StyledButton from "../StyledButton";

interface RightButtonsProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const RightButtons = ({ mobileMenuOpen, setMobileMenuOpen }: RightButtonsProps) => {
    return (
        <div className={`justify-end m-0 lg:m-6 text-white text-sm ${DefaultBody.className} `}>
            <LinkText
                href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
                external
                className='text-white no-underline mr-4 duration-200 underline-offset-4 font-medium text-base hidden lg:inline-block hover:underline'
            >
                Join the Discord
            </LinkText>

            <StyledButton size="md" variant="double-outline" className="hidden lg:inline-block hover:cursor-pointer hover:bg-gray-200/10">
                Contact Us!
            </StyledButton>

            <button
                className="block xl:hidden bg-transparent border-none p-2 focus:outline-none hover:bg-white/10 rounded-md transition-colors duration-200"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(prev => !prev)}
            >
                {mobileMenuOpen ? (
                    <X size={24} className="text-white" />
                ) : (
                    <CgMenuRight size={24} className="text-white" />
                )}
            </button>

        </div>
    );
};

export default RightButtons;