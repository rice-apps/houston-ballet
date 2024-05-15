import { redirect } from 'next/navigation';

export const metadata = {
    title: "Nutcracker Market",
    description: "Browse through the Nutcracker Market merchants, find your way around the market, and sign up for notifications.",
}

export default function Home() {
    redirect('/vendors');
}