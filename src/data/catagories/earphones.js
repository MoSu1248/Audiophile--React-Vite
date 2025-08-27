import { yx1 } from "../images/earphones";

export const earphonesDetails = {
  category: "Earphones",
  slug: "earphones",
  products: [
    {
      id: 6,
      name: "yxi ",
      price: 599,
      status: "New",
      images: yx1,
      categorySlug: "earphones",
      
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      features: [
        {
          text_1:
            "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
          text_2:
            "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        },
      ],
      inTheBox: [
        { quantity: 2, item: "Earphone Unit" },
        { quantity: 6, item: "Multi-size Earplugs" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "USB-C Charging Cable" },
        { quantity: 1, item: "Travel Pouch" },
      ],
    },
  ],
};
