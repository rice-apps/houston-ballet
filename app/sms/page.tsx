import { getCategories } from "@/lib/utils/utils";
import InfoForm from "../Components/InfoForm";

export default async function Page() {
    const subtitle = (await getCategories()).getSubtitle("notifications");
    return (
        <>
            <div className="absolute z-0 h-screen w-full bg-nutcrackerBackground p-5 bg-no-repeat bg-cover" role="banner"></div>
            <div className="relative z-20 flex h-screen flex-col justify-center p-5">
                <h1 className="font-sans top-20 bg-none text-center text-4xl font-bold tracking-[.15em] text-white md:text-7xl" role="main">
                    CONNECT
                </h1>
                <h3 className="pt-3 text-center text-lg md:text-xl font-medium tracking-[.15em] text-white">
                    {subtitle ?? ""}
                </h3>
                <InfoForm />
            </div>
        </>
    );
}
