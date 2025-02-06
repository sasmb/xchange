import React from "react";

const clientLogos = [
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
		alt: "",
	},
];

export const Logotable = () => {
	return (
		<section className="ezy__clients16 light py-14 md:py-24 bg-transparent dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 mb-6 md:mb-12">
					<div className="col-span-12 text-center">
						<h2 className="text-[25px] leading-none font-bold">
                            Trusted by individuals and businesses worldwide.
						</h2>
					</div>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-6">
					{clientLogos.map((client, i) => (
						<img
							src={client.logo}
							alt={client.alt}
							className="max-h-11 h-auto max-w-full grayscale mx-4 transition-all duration-500 ease-in-out hover:grayscale-0 pr-12 mt-6"
							key={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
