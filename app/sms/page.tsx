import { getCategories } from "@/lib/utils/utils";
import InfoForm from "../Components/InfoForm";
import Image from "next/legacy/image";

export const metadata = {
    title: "Notifications",
    description: "Sign up for notifications from the Nutcracker Market.",
}

export default async function Page() {
    const subtitle = (await getCategories()).getSubtitle("notifications");
    return (
        <>
    <div className="relative h-screen w-full overflow-hidden">
        <Image
            src='/background.png' // Change this path to your actual image location
            layout='fill'
            objectFit='cover'
            priority
            alt='Nutcracker background'
            className='z-0'
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center p-5">
            <h1 className="font-sans text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl" role="main">
                CONNECT
            </h1>
            <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
                {subtitle ?? ""}
            </h3>
            <InfoForm />
        </div>
    </div>
</>

    );
}
