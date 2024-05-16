import { getCategories } from "@/lib/utils/utils";
import InfoForm from "../Components/InfoForm";
import Image from "next/image";
import SmsBackground from "../../public/background.png";

export const metadata = {
    title: "Notifications",
    description: "Sign up for notifications from the Nutcracker Market.",
    metadataBase: new URL('https://houston-ballet-official.vercel.app'),
    openGraph: {
        title: "Notifications",
        description: "Sign up for notifications from the Nutcracker Market.",
        images: [
            {
                url: "/background.png",
                alt: "Notifications Cover Image",
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default async function Page() {
    const subtitle = (await getCategories()).getSubtitle("notifications");
    return <>
<div className="relative h-screen w-full overflow-hidden">
    <Image
        // Change this path to your actual image location
        src={SmsBackground}
        priority
        alt='Nutcracker background'
        className='z-0'
        fill
        sizes="100vw"
        style={{
            objectFit: "cover"
        }} />
    <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center p-5">
        <h1 className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl" role="heading">
            CONNECT
        </h1>
        <h2 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
            {subtitle ?? ""}
        </h2>
        <InfoForm />
    </div>
</div>
</>;
}
