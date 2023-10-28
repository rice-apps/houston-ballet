import React from 'react'; // Import React if not already imported
import Image from 'next/image';
import VendorsPage from './Pages/VendorsPage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Vendors</h1>
      <p>Here are all the wonderful vendors at the Nutcracker Market!</p>

      <VendorsPage
        photo_path="/boutique.jpg"
        name="A Unique Boutique by Jeanette - TX"
        description="Ladies' Fabulous Fashions & Unique Gifts X- Small thru Voluptuous"
        website='http://accessorizeinstyle.com'
        categories={['Category 1', 'Category 2', 'Category 3']}
      />
    </main>
  );
}
