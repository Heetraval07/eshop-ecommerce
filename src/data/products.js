// Central product catalog for the storefront.
// This is easy to swap for real backend data later.

// Product imagery for Mobile Phones
// Previously these pointed to generic category icons (gaming/earphone/speaker),
// which caused a visual mismatch where "phone" products showed non‑phone images.
// We now map them to real product photos so the product name and image match better.
import PhoneImg1 from "../assets/product/p-1.jpg";
import PhoneImg2 from "../assets/product/p-2.jpg";
import PhoneImg3 from "../assets/product/p-3.jpg";
import LaptopImg from "../assets/category/macbook.png";
import VrImg from "../assets/category/vr.png";
import WatchImg1 from "../assets/category/watch.png";
import WatchImg2 from "../assets/category/smartwatch2-removebg-preview.png";
// Product imagery (mostly headphones / accessories)
import AccessoryImg1 from "../assets/product/p-1.jpg";
import AccessoryImg2 from "../assets/product/p-2.jpg";
import AccessoryImg3 from "../assets/product/p-3.jpg";
import AccessoryImg4 from "../assets/product/p-4.jpg";
import AccessoryImg5 from "../assets/product/p-5.jpg";
import AccessoryImg6 from "../assets/product/p-7.jpg";
import AccessoryImg7 from "../assets/product/p-9.jpg";

// Normalized category keys used across the app
export const CATEGORY_KEYS = [
  "mobile",
  "laptop",
  "headphones",
  "vr",
  "watch",
  "accessories",
];

// Human‑readable labels for UI
export const CATEGORY_LABELS = {
  mobile: "Mobile Phones",
  laptop: "Laptops",
  headphones: "Headphones & Audio",
  vr: "VR / AR Headsets",
  watch: "Smart Watches",
  accessories: "Accessories",
};

export const products = [
  // Mobile Phones
  {
    id: "pro-phone-ultra",
    name: "Pro Phone Ultra",
    img: PhoneImg1,
    image: PhoneImg1,
    images: [PhoneImg1],
    title: "Pro Phone Ultra",
    category: "mobile",
    categoryLabel: CATEGORY_LABELS.mobile,
    price: 3299,
    priceAED: 3299,
    originalPriceAED: 3799,
    badge: "Latest",
    stock: 8,
    colors: ["Midnight Black", "Aurora Blue", "Sandstone"],
    sizes: ["128 GB", "256 GB"],
    shortDescription:
      "Flagship smartphone with 120Hz AMOLED display and pro-grade camera system.",
    longDescription:
      "Pro Phone Ultra is built for creators and power users. Capture studio-grade photos with its triple camera array, enjoy ultra-smooth 120Hz AMOLED visuals, and breeze through your day with an all-day intelligent battery and fast charging. Dual speakers and advanced cooling keep gaming and content smooth.",
    description:
      "Flagship smartphone with 120Hz AMOLED display and pro-grade camera system.",
    aosDelay: "0",
  },
  {
    id: "neo-mobile-plus",
    name: "Neo Mobile Plus",
    img: PhoneImg2,
    image: PhoneImg2,
    images: [PhoneImg2],
    title: "Neo Mobile Plus",
    category: "mobile",
    categoryLabel: CATEGORY_LABELS.mobile,
    price: 2499,
    priceAED: 2499,
    originalPriceAED: 2799,
    badge: "Popular",
    stock: 15,
    colors: ["Graphite", "Sky Silver"],
    sizes: ["128 GB"],
    shortDescription:
      "Premium mid-range phone with 5G, vibrant AMOLED display, and fast charging.",
    longDescription:
      "Neo Mobile Plus balances performance and value. The smooth AMOLED display, 5G modem, and efficient chipset make it perfect for everyday streaming, social, and gaming. Fast charging keeps you topped up, while the dual-camera system delivers sharp photos indoors and out.",
    description:
      "Premium mid-range phone with 5G, vibrant AMOLED display, and fast charging.",
    aosDelay: "150",
  },
  {
    id: "alpha-smart-pro",
    name: "Alpha Smart Pro",
    img: PhoneImg3,
    image: PhoneImg3,
    images: [PhoneImg3],
    title: "Alpha Smart Pro",
    category: "mobile",
    categoryLabel: CATEGORY_LABELS.mobile,
    price: 2899,
    priceAED: 2899,
    originalPriceAED: 3199,
    badge: "Featured",
    stock: 0,
    colors: ["Obsidian"],
    sizes: ["256 GB"],
    shortDescription:
      "High-performance smartphone with advanced AI camera and premium build.",
    longDescription:
      "Alpha Smart Pro packs a flagship processor, cinematic display, and AI-enhanced camera that intelligently adapts to every scene. A refined metal-and-glass body, stereo speakers, and all-day battery life make it a versatile daily driver for power users.",
    description:
      "High-performance smartphone with advanced AI camera and premium build.",
    aosDelay: "300",
  },
  // Laptops
  {
    id: "ultrabook-pro-15",
    name: "Ultrabook Pro 15",
    img: LaptopImg,
    image: LaptopImg,
    images: [LaptopImg],
    title: "Ultrabook Pro 15",
    category: "laptop",
    categoryLabel: CATEGORY_LABELS.laptop,
    price: 5699,
    priceAED: 5699,
    originalPriceAED: 6299,
    badge: "Best Seller",
    stock: 5,
    colors: ["Space Grey"],
    sizes: ["16 GB / 512 GB SSD"],
    shortDescription:
      "Powerful 15-inch ultrabook with latest-gen CPU and all‑day battery life.",
    longDescription:
      "Ultrabook Pro 15 is tuned for hybrid work and creation. With a high-resolution display, precision keyboard, fast SSD storage, and quiet thermals, it handles editing, coding, and multi-tab browsing with ease. Advanced security and Wi‑Fi 6 keep your workspace fast and protected.",
    description:
      "Powerful 15-inch ultrabook with latest-gen CPU and all‑day battery life.",
    aosDelay: "450",
  },
  {
    id: "gaming-laptop-rtx",
    name: "Gaming Laptop RTX",
    img: LaptopImg,
    image: LaptopImg,
    images: [LaptopImg],
    title: "Gaming Laptop RTX",
    category: "laptop",
    categoryLabel: CATEGORY_LABELS.laptop,
    price: 6499,
    priceAED: 6499,
    originalPriceAED: 6999,
    badge: "Gaming",
    stock: 12,
    colors: ["Stealth Black"],
    sizes: ["16 GB / 1 TB SSD"],
    shortDescription:
      "High-performance gaming laptop with RTX graphics and 144Hz display.",
    longDescription:
      "Gaming Laptop RTX is built for competitive and AAA gaming. The RTX graphics card, 144Hz panel, and responsive keyboard deliver smooth, low-latency gameplay. Configurable performance modes and efficient cooling keep frame rates high during long sessions.",
    description:
      "High-performance gaming laptop with RTX graphics and 144Hz display.",
    aosDelay: "0",
  },
  {
    id: "creator-laptop-4k",
    name: "Creator Laptop 4K",
    img: LaptopImg,
    image: LaptopImg,
    images: [LaptopImg],
    title: "Creator Laptop 4K",
    category: "laptop",
    categoryLabel: CATEGORY_LABELS.laptop,
    price: 7299,
    priceAED: 7299,
    originalPriceAED: 7899,
    badge: "Creator",
    stock: 6,
    colors: ["Studio Silver"],
    sizes: ["32 GB / 1 TB SSD"],
    shortDescription:
      "Professional creator laptop with 4K display and powerful GPU.",
    longDescription:
      "Creator Laptop 4K is calibrated for color-accurate workflows. Edit 4K timelines, retouch large photo libraries, and render 3D scenes on the sharp 4K display paired with a powerful GPU. Studio-grade speakers and a large glass trackpad complete the creator experience.",
    description:
      "Professional creator laptop with 4K display and powerful GPU.",
    aosDelay: "150",
  },
  {
    id: "business-laptop-ultra",
    name: "Business Laptop Ultra",
    img: LaptopImg,
    image: LaptopImg,
    images: [LaptopImg],
    title: "Business Laptop Ultra",
    category: "laptop",
    categoryLabel: CATEGORY_LABELS.laptop,
    price: 4299,
    priceAED: 4299,
    originalPriceAED: 4599,
    badge: "Business",
    stock: 20,
    colors: ["Slate Grey"],
    sizes: ["16 GB / 512 GB SSD"],
    shortDescription:
      "Sleek business laptop with long battery life and enterprise security.",
    longDescription:
      "Business Laptop Ultra is made for leaders on the move. It combines a bright anti-glare display, long battery life, and enterprise-grade security in a thin chassis that travels easily. Multiple ports and fast charging keep you productive between meetings.",
    description:
      "Sleek business laptop with long battery life and enterprise security.",
    aosDelay: "300",
  },
  // Headphones & Audio
  {
    id: "pro-wireless-headset",
    name: "Pro Wireless Headset",
    img: AccessoryImg1,
    image: AccessoryImg1,
    images: [AccessoryImg1],
    title: "Pro Wireless Headset",
    category: "headphones",
    categoryLabel: CATEGORY_LABELS.headphones,
    price: 499,
    priceAED: 499,
    originalPriceAED: 599,
    badge: "Best Seller",
    stock: 24,
    colors: ["Carbon Black", "Ice White"],
    sizes: ["Standard"],
    shortDescription:
      "Low-latency wireless headset with immersive 3D audio and RGB lighting.",
    longDescription:
      "Pro Wireless Headset is tuned for gaming, content, and calls. 3D audio and soft memory foam cushions keep long sessions comfortable, while low-latency wireless and a broadcast-grade mic deliver clear communication. Customizable RGB lighting lets you match your setup.",
    description:
      "Low-latency wireless headset with immersive 3D audio and RGB lighting.",
    aosDelay: "450",
  },
  {
    id: "studio-noise-cancelling",
    name: "Studio Noise Cancelling",
    img: AccessoryImg2,
    image: AccessoryImg2,
    images: [AccessoryImg2],
    title: "Studio Noise Cancelling",
    category: "headphones",
    categoryLabel: CATEGORY_LABELS.headphones,
    price: 749,
    priceAED: 749,
    originalPriceAED: 849,
    badge: "Featured",
    stock: 10,
    colors: ["Matte Black"],
    sizes: ["Standard"],
    shortDescription:
      "Over-ear headphones with adaptive noise cancelling and studio detail.",
    longDescription:
      "Studio Noise Cancelling headphones combine adaptive ANC with a finely tuned sound signature that reveals detail in music, podcasts, and content. Multi-device pairing, long battery life, and plush ear cushions make them ideal for travel and deep-focus work.",
    description:
      "Over-ear headphones with adaptive noise cancelling and studio detail.",
    aosDelay: "0",
  },
  {
    id: "aurora-soundbar",
    name: "Aurora Soundbar",
    img: AccessoryImg3,
    image: AccessoryImg3,
    images: [AccessoryImg3],
    title: "Aurora Soundbar",
    category: "headphones",
    categoryLabel: CATEGORY_LABELS.headphones,
    price: 699,
    priceAED: 699,
    originalPriceAED: 799,
    badge: "Cinematic",
    stock: 9,
    colors: ["Gunmetal"],
    sizes: ["Standard"],
    shortDescription:
      "Compact RGB soundbar for immersive desktop or console audio.",
    longDescription:
      "Aurora Soundbar transforms your desk into a mini theater. Rich stereo drivers, subtle bass, and dynamic RGB lighting create an immersive ambience for games, films, and playlists. Connect via USB-C, Bluetooth, or AUX for flexible setups.",
    description:
      "Compact RGB soundbar for immersive desktop or console audio.",
    aosDelay: "150",
  },
  // VR / AR Headsets
  {
    id: "titan-vr-goggles",
    name: "Titan VR Goggles",
    img: VrImg,
    image: VrImg,
    images: [VrImg],
    title: "Titan VR Goggles",
    category: "vr",
    categoryLabel: CATEGORY_LABELS.vr,
    price: 1899,
    priceAED: 1899,
    originalPriceAED: 2099,
    badge: "New",
    stock: 7,
    colors: ["Shadow Grey"],
    sizes: ["128 GB"],
    shortDescription:
      "Next-gen VR goggles with wide FOV and ultra-smooth refresh rate.",
    longDescription:
      "Titan VR Goggles bring next-gen fidelity to your favorite VR titles. A wide field of view, high refresh rate display, and precise tracking deliver a deeply immersive experience. The balanced strap system and soft padding keep things comfortable during long sessions.",
    description:
      "Next-gen VR goggles with wide FOV and ultra-smooth refresh rate.",
    aosDelay: "300",
  },
  {
    id: "horizon-vr-bundle",
    name: "Horizon VR Bundle",
    img: VrImg,
    image: VrImg,
    images: [VrImg],
    title: "Horizon VR Bundle",
    category: "vr",
    categoryLabel: CATEGORY_LABELS.vr,
    price: 2499,
    priceAED: 2499,
    originalPriceAED: 2699,
    badge: "Bundle",
    stock: 4,
    colors: ["Polar White"],
    sizes: ["256 GB"],
    shortDescription:
      "Complete VR kit with headset, dual controllers, and base station.",
    longDescription:
      "Horizon VR Bundle includes everything you need to step into VR. The high-res headset, ergonomic controllers, and base station work together for room-scale experiences, from fitness titles to productivity and exploration.",
    description:
      "Complete VR kit with headset, dual controllers, and base station.",
    aosDelay: "450",
  },
  {
    id: "ar-glasses-pro",
    name: "AR Glasses Pro",
    img: VrImg,
    image: VrImg,
    images: [VrImg],
    title: "AR Glasses Pro",
    category: "vr",
    categoryLabel: CATEGORY_LABELS.vr,
    price: 2699,
    priceAED: 2699,
    originalPriceAED: 2999,
    badge: "AR",
    stock: 3,
    colors: ["Crystal"],
    sizes: ["One Size"],
    shortDescription:
      "Advanced AR glasses with transparent display and gesture control.",
    longDescription:
      "AR Glasses Pro overlays contextual information, navigation, and notifications directly into your field of view. Lightweight frames, intuitive gesture controls, and a bright transparent display make them ideal for productivity and guided workflows.",
    description:
      "Advanced AR glasses with transparent display and gesture control.",
    aosDelay: "0",
  },
  // Smart Watches
  {
    id: "pulse-smartwatch",
    name: "Pulse Smartwatch",
    img: WatchImg2,
    image: WatchImg2,
    images: [WatchImg2],
    title: "Pulse Smartwatch",
    category: "watch",
    categoryLabel: CATEGORY_LABELS.watch,
    price: 699,
    priceAED: 699,
    originalPriceAED: 799,
    badge: "Smart",
    stock: 18,
    colors: ["Graphite", "Rose Gold"],
    sizes: ["40 mm"],
    shortDescription:
      "Fitness-first smartwatch with advanced workout and sleep tracking.",
    longDescription:
      "Pulse Smartwatch automatically tracks workouts, heart rate, and sleep, with guided breathing and recovery reminders. Stay connected with notifications, music controls, and weather on your wrist, plus interchangeable straps to match every outfit.",
    description:
      "Fitness-first smartwatch with advanced workout and sleep tracking.",
    aosDelay: "150",
  },
  {
    id: "fitness-track-pro",
    name: "Fitness Track Pro",
    img: WatchImg2,
    image: WatchImg2,
    images: [WatchImg2],
    title: "Fitness Track Pro",
    category: "watch",
    categoryLabel: CATEGORY_LABELS.watch,
    price: 849,
    priceAED: 849,
    originalPriceAED: 949,
    badge: "Fitness",
    stock: 11,
    colors: ["Midnight Blue"],
    sizes: ["44 mm"],
    shortDescription:
      "Advanced fitness tracker with built-in GPS and training insights.",
    longDescription:
      "Fitness Track Pro goes beyond steps with training load metrics, route tracking via built‑in GPS, and on-wrist coaching. Waterproof construction and long battery life mean you can wear it from pool sessions to weekend hikes without worrying about charging.",
    description:
      "Advanced fitness tracker with built-in GPS and training insights.",
    aosDelay: "300",
  },
  {
    id: "luxury-smartwatch",
    name: "Luxury Smartwatch",
    img: WatchImg1,
    image: WatchImg1,
    images: [WatchImg1],
    title: "Luxury Smartwatch",
    category: "watch",
    categoryLabel: CATEGORY_LABELS.watch,
    price: 1399,
    priceAED: 1399,
    originalPriceAED: 1599,
    badge: "Premium",
    stock: 2,
    colors: ["Champagne Steel"],
    sizes: ["42 mm"],
    shortDescription:
      "Premium smartwatch with stainless body and advanced health sensors.",
    longDescription:
      "Luxury Smartwatch pairs a stainless-steel case with sapphire glass and detailed watch faces that feel at home in any boardroom. Below the surface, advanced health sensors monitor heart rate, SpO₂, and stress, with multi-day battery life and fast charging.",
    description:
      "Premium smartwatch with stainless body and advanced health sensors.",
    aosDelay: "450",
  },
  // Accessories
  {
    id: "power-bank-20000",
    name: "Power Bank 20,000 mAh",
    img: AccessoryImg4,
    image: AccessoryImg4,
    images: [AccessoryImg4],
    title: "Power Bank 20,000 mAh",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 169,
    priceAED: 169,
    originalPriceAED: 199,
    badge: "Essential",
    stock: 40,
    colors: ["Black"],
    sizes: ["20,000 mAh"],
    shortDescription:
      "High-capacity 20,000 mAh power bank with fast USB‑C charging.",
    longDescription:
      "Power Bank 20,000 mAh keeps phones, tablets, and earbuds topped up with multiple ports and fast USB‑C PD output. An LED battery indicator and slim profile make it easy to throw into a backpack or daily carry.",
    description:
      "High-capacity 20,000 mAh power bank with fast USB‑C charging.",
    aosDelay: "0",
  },
  {
    id: "usb-c-hub-pro",
    name: "USB-C Hub Pro",
    img: AccessoryImg5,
    image: AccessoryImg5,
    images: [AccessoryImg5],
    title: "USB-C Hub Pro",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 229,
    priceAED: 229,
    originalPriceAED: 259,
    badge: "Essential",
    stock: 30,
    colors: ["Space Grey"],
    sizes: ["8-in-1"],
    shortDescription:
      "Premium USB‑C hub with HDMI, card reader, and high-speed data.",
    longDescription:
      "USB‑C Hub Pro expands your laptop with HDMI, SD/microSD, USB‑A, and USB‑C PD passthrough. The aluminum body and compact footprint are designed to live on your desk or travel in your sleeve without clutter.",
    description:
      "Premium USB‑C hub with HDMI, card reader, and high-speed data.",
    aosDelay: "150",
  },
  {
    id: "wireless-charger-pad",
    name: "Wireless Charger Pad",
    img: AccessoryImg6,
    image: AccessoryImg6,
    images: [AccessoryImg6],
    title: "Wireless Charger Pad",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 129,
    priceAED: 129,
    originalPriceAED: 159,
    badge: "Charging",
    stock: 50,
    colors: ["Soft White"],
    sizes: ["10 W"],
    shortDescription:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    longDescription:
      "Wireless Charger Pad delivers reliable Qi-compatible fast charging on a soft, non-slip surface. A subtle status LED and slim profile keep your nightstand or workspace clean and uncluttered.",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    aosDelay: "300",
  },
  {
    id: "laptop-sleeve-premium",
    name: "Laptop Sleeve Premium",
    img: AccessoryImg7,
    image: AccessoryImg7,
    images: [AccessoryImg7],
    title: "Laptop Sleeve Premium",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 149,
    priceAED: 149,
    originalPriceAED: 179,
    badge: "Protection",
    stock: 27,
    colors: ["Charcoal"],
    sizes: ["13–15 inch"],
    shortDescription:
      "Padded laptop sleeve with water-resistant exterior and soft lining.",
    longDescription:
      "Laptop Sleeve Premium wraps laptops in soft microfiber and impact-absorbing padding, with a water-resistant exterior fabric. The minimal design slides easily into backpacks while protecting devices from bumps and scratches.",
    description:
      "Padded laptop sleeve with water-resistant exterior and soft lining.",
    aosDelay: "450",
  },
  {
    id: "gaming-mouse-keyboard",
    name: "Gaming Mouse & Keyboard",
    img: AccessoryImg1,
    image: AccessoryImg1,
    images: [AccessoryImg1],
    title: "Gaming Mouse & Keyboard",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 469,
    priceAED: 469,
    originalPriceAED: 529,
    badge: "Gaming",
    stock: 22,
    colors: ["Black"],
    sizes: ["Full size"],
    shortDescription:
      "RGB gaming mouse and mechanical keyboard bundle for competitive play.",
    longDescription:
      "Gaming Mouse & Keyboard bundle combines a precise sensor mouse with a tactile mechanical keyboard, both with customizable RGB. Anti-ghosting, macro support, and onboard profiles let you fine-tune your setup for every title.",
    description:
      "RGB gaming mouse and mechanical keyboard bundle for competitive play.",
    aosDelay: "0",
  },
  {
    id: "phantom-vr-controllers",
    name: "Phantom VR Controllers",
    img: VrImg,
    image: VrImg,
    images: [VrImg],
    title: "Phantom VR Controllers",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 649,
    priceAED: 649,
    originalPriceAED: 699,
    badge: "VR",
    stock: 13,
    colors: ["Matte Grey"],
    sizes: ["Pair"],
    shortDescription:
      "Ergonomic VR controllers with precise tracking and haptic feedback.",
    longDescription:
      "Phantom VR Controllers upgrade your VR rig with responsive triggers, precise tracking, and subtle haptics that bring interactions to life. The contoured grips stay comfortable through long sessions and intense gameplay.",
    description:
      "Ergonomic VR controllers with precise tracking and haptic feedback.",
    aosDelay: "150",
  },
  {
    id: "phone-case-pro",
    name: "Phone Case Pro",
    img: AccessoryImg2,
    image: AccessoryImg2,
    images: [AccessoryImg2],
    title: "Phone Case Pro",
    category: "accessories",
    categoryLabel: CATEGORY_LABELS.accessories,
    price: 99,
    priceAED: 99,
    originalPriceAED: 119,
    badge: "Protection",
    stock: 60,
    colors: ["Clear", "Matte Black"],
    sizes: ["Universal"],
    shortDescription:
      "Durable phone case with shock absorption and raised screen protection.",
    longDescription:
      "Phone Case Pro surrounds your device with shock-absorbing corners and raised edges that protect both screen and camera. A slim profile preserves your phone’s feel while adding reliable day-to-day protection.",
    description:
      "Durable phone case with shock absorption and raised screen protection.",
    aosDelay: "300",
  },
];

export const getProductById = (id) =>
  products.find((product) => product.id === id);

