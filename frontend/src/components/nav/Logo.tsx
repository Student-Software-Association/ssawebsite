import Link from "next/link";
import Image from "next/image";
import { Span } from "../Typographies";

const Logo = () => {
  return (
    <div className="justify-start my-4 mx-6">
      <Link href="/" className="group inline-flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="SSA Logo"
          width={58}
          height={58}
          className="xl:cursor-pointer xl:transform-gpu xl:transition-transform xl:duration-250 xl:ease-in-out xl:group-hover:rotate-[360deg] w-8 lg:w-12 m-auto"
        />
        <Span className="relative inline-block select-none whitespace-nowrap">
          <Span className="text-white font-semibold opacity-0 items-center">
            Student Software <Span className="block">Association</Span>
          </Span>
          <Span className="absolute left-0 top-0 h-full w-0 overflow-hidden items-center text-[16px] font-semibold text-white xl:transition-[width] xl:duration-700 xl:ease-out xl:group-hover:w-full">
            Student Software <Span className="block">Association</Span>
          </Span>
        </Span>
      </Link>
    </div>
  );
};

export default Logo;