import { zx7, zx9 } from "../images/speakers";

export const speakersDetails = {
  category: "Speakers",
  slug: "speakers",
  products: [
    {
      id: 4,
      name: "zx9 Speaker",
      price: 4500,
      status: "New",
      images: zx9,
      categorySlug: "speakers",

      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        {
          text_1:
            "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
          text_2:
            "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        },
      ],
      inTheBox: [
        { quantity: 2, item: "Speaker Unit" },
        { quantity: 2, item: "Speaker Cloth Panel" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 10m Audio Cable" },
        { quantity: 1, item: "10m Optical Cable" },
      ],
    },
    {
      id: 5,
      name: "zx7 Speaker",
      price: 3500,
      status: " ",
      images: zx7,
      categorySlug: "speakers",

      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      features: [
        {
          text_1:
            "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
          text_2:
            "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        },
      ],
      inTheBox: [
        { quantity: 2, item: "Speaker Unit" },
        { quantity: 2, item: "Speaker Cloth Panel" },
        { quantity: 1, item: "User Manual" },
        { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
        { quantity: 1, item: "7.5m Optical Cable" },
      ],
    },
  ],
};
