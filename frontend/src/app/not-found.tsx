import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-6
            bg-[linear-gradient(200deg,#111111_0%,#0B0C2A_100%)]"
            style={{ lineHeight: 1}}
            >

            <div className="flex flex-col items-center text-center gap-6 max-w-[520px]">

                {/* Logo + title */}
                <div className="flex items-center gap-6">
                <Image
                    src="/images/SSALogoWhite.webp"
                    alt="Student Software Association"
                    width={42}
                    height={42}
                    className="w-[65px] h-[65px] object-contain opacity-90"
                />

                <h1 className="text-white text-[75px] font-semibold tracking-tight">
                    404 Error
                </h1>
                </div>

                {/* subtitle */}
                <p className="text-white/90 text-[25px] leading-relaxed max-w-[420px]" style={{lineHeight: 1}}>
                    We ran into an unexpected error,
                    not sure how that happened :(
                </p>

                {/* extra text */}
                <div style={{lineHeight: 1}}>
                    <p className="text-white/40 text-sm">
                    The page you are looking for does not exist.
                    </p>

                    {/* link */}
                    <Link
                        href="/"
                        className="text-white text-sm hover:text-white/70 transition-colors"
                        >
                        Return to the homepage →
                    </Link>
                </div>

            </div>
            </div>
    )
}