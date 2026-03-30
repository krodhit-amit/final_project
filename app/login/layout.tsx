import Image from 'next/image';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-white">
            <Image
                src="/idbi_bg.png"
                alt="IDBI Background"
                width={1920}
                height={1080}
                loading="eager"
                className="opacity-10 fixed top-0 left-0 w-[30%] h-full z-0" />
            {children}
        </div>
    );
}
