"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A cozy Starbucks café in Norwich with inviting exterior lights and seating at night." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting." },
  { id: "product1", url: "https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A cup of latte with intricate art beside a laptop on a wooden table, depicting a cozy work setting." },
  { id: "product2", url: "https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A stylish espresso in a porcelain cup on a wooden table, perfect for coffee lovers." },
  { id: "product3", url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a barista pouring milk to create latte art in a coffee cup." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CoffeeHub"
          buttonText="Order Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to CoffeeHub"
            description="Experience the finest brew in a cozy ambiance."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[
              { text: "Explore Menu", href: "menu" },
              { text: "Find Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Crafting delightful coffee experiences for our community."
            buttons={[{ text: "Our Story", href: "about" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "CoffeeHub", name: "Espresso", price: "$3.00", rating: 5, reviewCount: "100", imageSrc: assetMap.find(a => a.id === "product1")?.url },
              { id: "2", brand: "CoffeeHub", name: "Cappuccino", price: "$4.00", rating: 4, reviewCount: "150", imageSrc: assetMap.find(a => a.id === "product2")?.url },
              { id: "3", brand: "CoffeeHub", name: "Latte", price: "$4.50", rating: 4, reviewCount: "200", imageSrc: assetMap.find(a => a.id === "product3")?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Connected"
            description="Join our newsletter for the latest updates and offers!"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Shop", items: [
                { label: "Menu", href: "menu" },
                { label: "Order Online", href: "order" }
              ] },
              { title: "About", items: [
                { label: "Our Story", href: "about" },
                { label: "Join Our Team", href: "careers" }
              ] }
            ]}
            copyrightText="© 2025 CoffeeHub"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
