import Image from 'next/image';

const clientLogos = [
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    alt: "Client Logo 2",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "Client Logo 3",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "Client Logo 6",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "Client Logo 7",
  },
];

export function Logotable() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
      {clientLogos.map((logo, index) => (
        <Image 
          key={index}
          src={logo.logo}
          alt={logo.alt || `Client Logo ${index + 1}`}
          width={120}
          height={40}
        />
      ))}
    </div>
  );
} 