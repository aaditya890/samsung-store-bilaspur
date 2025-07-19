import { Component, type OnInit, type OnDestroy } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"

interface ProductDetail {
  id: string
  name: string
  slug: string
  images: string[]
  hoverImage: string
  description: string
  longDescription: string
  features: string[]
  specifications: { [key: string]: string }
  colors: { name: string; code: string; image: string }[]
  storage: { size: string; available: boolean }[]
  inStock: boolean
  category: string
  releaseDate: string
  dimensions: string
  weight: string
  display: string
  camera: string
  battery: string
  processor: string
  os: string
  connectivity: string[]
  sensors: string[]
  boxContents: string[]
  warranty: string
  keyHighlights: string[]
}

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: ProductDetail | null = null
  selectedImageIndex = 0
  selectedColorIndex = 0
  selectedStorageIndex = 0
  isLoading = true
  notFound = false

  // Related products
  relatedProducts: any[] = []

  // All products data with detailed information
  private allProducts: ProductDetail[] = [
    {
      id: "1",
      name: "Galaxy A16",
      slug: "galaxy-a16",
      images: [
        "assets/products/a16.webp",
        // "assets/products/a16-2.webp",
        // "assets/products/a16-3.webp"
      ],
      hoverImage: "assets/products/a16-hover.webp",
      description: "Affordable performance with a smooth display and long battery life",
      longDescription:
        "Galaxy A16 offers a reliable smartphone experience with a vivid display, triple camera setup, and a massive 5000mAh battery. It's designed for those who want essential features with premium styling.",
      features: [
        "6.6-inch PLS LCD display",
        "Triple rear camera with AI enhancements",
        "5000mAh battery with 25W fast charging",
        "Side-mounted fingerprint sensor",
        "Expandable storage up to 1TB",
        "One UI Core based on Android"
      ],
      specifications: {
        Display: "6.6-inch PLS LCD, 90Hz",
        Processor: "MediaTek Helio G85",
        RAM: "4GB / 6GB",
        Storage: "64GB / 128GB",
        "Main Camera": "50MP + 2MP + 2MP",
        "Front Camera": "13MP",
        Battery: "5000mAh",
        OS: "Android 14 with One UI Core 6",
        Connectivity: "4G LTE, Wi-Fi 5, Bluetooth 5.0"
      },
      colors: [
        { name: "Black", code: "#1E1E1E", image: "assets/products/a16-black.webp" },
        { name: "Light Green", code: "#CFE9D9", image: "assets/products/a16-green.webp" },
        { name: "Blue", code: "#A2C5F2", image: "assets/products/a16-blue.webp" }
      ],
      storage: [
        { size: "64GB", available: true },
        { size: "128GB", available: true }
      ],
      inStock: true,
      category: "A Series",
      releaseDate: "March 2024",
      dimensions: "167.7 x 78.0 x 9.1 mm",
      weight: "202g",
      display: "6.6-inch PLS LCD, 1600 x 720, 90Hz",
      camera: "Triple camera: 50MP main, 2MP macro, 2MP depth",
      battery: "5000mAh with 25W wired charging",
      processor: "MediaTek Helio G85",
      os: "Android 14 with One UI Core 6",
      connectivity: ["4G", "Wi-Fi 5", "Bluetooth 5.0", "USB-C"],
      sensors: ["Accelerometer", "Proximity", "Ambient Light", "Fingerprint (Side-mounted)"],
      boxContents: ["Galaxy A16", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Big 5000mAh battery",
        "Smooth 90Hz display",
        "Essential triple camera",
        "Stylish design",
        "Side fingerprint unlock"
      ]
    }
    ,
    {
      id: "2",
      name: "Galaxy A36",
      slug: "galaxy-a36",
      images: [
        "assets/products/a36.webp",
        // "assets/products/a36-2.webp",
        // "assets/products/a36-3.webp"
      ],
      hoverImage: "assets/products/a36-hover.webp",
      description: "Advanced midrange with OIS camera and AMOLED screen",
      longDescription:
        "The Galaxy A36 delivers a premium feel with its Super AMOLED display, Optical Image Stabilization camera, and durable design. Perfect for users seeking performance and style in one package.",
      features: [
        "6.5-inch Super AMOLED FHD+ display",
        "50MP main camera with OIS",
        "5000mAh battery with 25W fast charging",
        "In-display fingerprint sensor",
        "IP67 water and dust resistance",
        "4K video recording support"
      ],
      specifications: {
        Display: "6.5-inch Super AMOLED, 120Hz",
        Processor: "Snapdragon 695",
        RAM: "6GB / 8GB",
        Storage: "128GB / 256GB",
        "Main Camera": "50MP + 8MP + 5MP",
        "Front Camera": "13MP",
        Battery: "5000mAh",
        OS: "Android 14 with One UI 6",
        Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3"
      },
      colors: [
        { name: "Awesome Graphite", code: "#2B2C2E", image: "assets/products/a36-black.webp" },
        { name: "Awesome Lime", code: "#C8E481", image: "assets/products/a36-lime.webp" },
        { name: "Awesome Violet", code: "#B9A9F1", image: "assets/products/a36-violet.webp" }
      ],
      storage: [
        { size: "128GB", available: true },
        { size: "256GB", available: true }
      ],
      inStock: true,
      category: "A Series",
      releaseDate: "May 2024",
      dimensions: "161.3 x 78.0 x 8.2 mm",
      weight: "201g",
      display: "6.5-inch FHD+ Super AMOLED, 2340 x 1080, 120Hz",
      camera: "Triple camera: 50MP OIS, 8MP ultrawide, 5MP macro",
      battery: "5000mAh with 25W wired charging",
      processor: "Snapdragon 695 5G",
      os: "Android 14 with One UI 6",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC", "USB-C"],
      sensors: ["Accelerometer", "Gyro", "Proximity", "Ambient Light", "In-display Fingerprint"],
      boxContents: ["Galaxy A36", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Super AMOLED 120Hz screen",
        "OIS-enabled 50MP camera",
        "5G-ready Snapdragon chip",
        "IP67 water resistance",
        "All-day battery"
      ]
    }
    ,

    {
      id: "3",
      name: "Galaxy A56",
      slug: "galaxy-a56",
      images: [
        "assets/products/a56.webp",
        // "assets/products/a56-2.webp",
        // "assets/products/a56-3.webp"
      ],
      hoverImage: "assets/products/a56-hover.webp",
      description: "Flagship-like features in a premium midrange body",
      longDescription:
        "Galaxy A56 blends flagship-level performance with a smooth AMOLED display, 50MP OIS camera, and stereo speakers. Designed for those who demand power and style in their everyday smartphone.",
      features: [
        "6.7-inch Super AMOLED+ 120Hz display",
        "50MP triple rear camera with OIS",
        "5000mAh battery with 25W charging",
        "Stereo speakers with Dolby Atmos",
        "IP67 water and dust resistance",
        "On-screen fingerprint sensor"
      ],
      specifications: {
        Display: "6.7-inch Super AMOLED+, 120Hz",
        Processor: "Snapdragon 7 Gen 1",
        RAM: "8GB",
        Storage: "128GB / 256GB",
        "Main Camera": "50MP + 8MP + 5MP",
        "Front Camera": "32MP",
        Battery: "5000mAh",
        OS: "Android 14 with One UI 6",
        Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3"
      },
      colors: [
        { name: "Awesome Navy", code: "#1B2D4F", image: "assets/products/a56-navy.webp" },
        { name: "Awesome Iceblue", code: "#D6EFFF", image: "assets/products/a56-blue.webp" },
        { name: "Awesome Lilac", code: "#C2B1DD", image: "assets/products/a56-lilac.webp" }
      ],
      storage: [
        { size: "128GB", available: true },
        { size: "256GB", available: true }
      ],
      inStock: true,
      category: "A Series",
      releaseDate: "June 2024",
      dimensions: "165.5 x 77.0 x 8.3 mm",
      weight: "209g",
      display: "6.7-inch Super AMOLED+, 2400 x 1080, 120Hz",
      camera: "Triple camera: 50MP main OIS, 8MP ultrawide, 5MP macro",
      battery: "5000mAh with 25W wired charging",
      processor: "Snapdragon 7 Gen 1",
      os: "Android 14 with One UI 6",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC", "USB-C"],
      sensors: ["Accelerometer", "Gyro", "Proximity", "Ambient Light", "On-screen Fingerprint"],
      boxContents: ["Galaxy A56", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "120Hz AMOLED+ screen",
        "50MP camera with OIS",
        "Dolby Atmos stereo speakers",
        "IP67 water protection",
        "Powerful Snapdragon chip"
      ]
    }
    ,
    {
      id: "4",
      name: "Galaxy Book5 Pro",
      slug: "galaxy-book5-pro",
      images: [
        "assets/products/book-5pro.webp",
        // "assets/products/book5-2.webp",
        // "assets/products/book5-3.webp"
      ],
      hoverImage: "assets/products/book5-hover.webp",
      description: "Ultra-thin laptop with Galaxy ecosystem power",
      longDescription:
        "Galaxy Book5 Pro is built for productivity and creativity with a stunning AMOLED display, Intel Core Ultra processor, and seamless integration with your Galaxy devices. Experience performance and portability in one elegant form.",
      features: [
        "16-inch 3K AMOLED touchscreen display",
        "Intel Core Ultra 7 processor",
        "Lightweight aluminum design",
        "Advanced cooling with dual fans",
        "Samsung Multi Control with Galaxy Tab",
        "Up to 20-hour battery life"
      ],
      specifications: {
        Display: "16-inch 3K AMOLED, 2880 x 1800",
        Processor: "Intel Core Ultra 7 (Intel Evo)",
        RAM: "16GB LPDDR5x",
        Storage: "512GB / 1TB NVMe SSD",
        GPU: "Intel Arc Graphics",
        Battery: "76Wh",
        OS: "Windows 11 Home",
        Connectivity: "Wi-Fi 6E, Bluetooth 5.3"
      },
      colors: [
        { name: "Moonstone Gray", code: "#3C3F42", image: "assets/products/book5-gray.webp" },
        { name: "Platinum Silver", code: "#D1D5DC", image: "assets/products/book5-silver.webp" }
      ],
      storage: [
        { size: "512GB", available: true },
        { size: "1TB", available: true }
      ],
      inStock: true,
      category: "Laptop",
      releaseDate: "February 2024",
      dimensions: "355.4 x 250.4 x 12.5 mm",
      weight: "1.56kg",
      display: "16-inch AMOLED, 3K resolution, touchscreen",
      camera: "1080p FHD webcam",
      battery: "76Wh, up to 20 hours usage",
      processor: "Intel Core Ultra 7",
      os: "Windows 11 Home",
      connectivity: ["Wi-Fi 6E", "Bluetooth 5.3", "Thunderbolt 4", "USB-C", "HDMI"],
      sensors: ["Ambient Light", "Fingerprint (Power Key)"],
      boxContents: ["Galaxy Book5 Pro", "65W USB-C Charger", "Quick Start Guide"],
      warranty: "1 Year On-site Warranty",
      keyHighlights: [
        "3K AMOLED touchscreen",
        "Intel Core Ultra performance",
        "Thin and light body",
        "Galaxy ecosystem sync",
        "Long-lasting battery"
      ]
    },
    {
      id: "5",
      name: "Galaxy Z Flip7",
      slug: "galaxy-z-flip7",
      images: [
        "assets/products/flip-7.webp",
        // "assets/products/flip7-2.webp",
        // "assets/products/flip7-3.webp"
      ],
      hoverImage: "assets/products/flip7-hover.webp",
      description: "Flip into the future with compact style and AI innovation",
      longDescription:
        "Galaxy Z Flip7 takes foldables to the next level with an enhanced Flex Window, improved hinge durability, and AI-powered photography. Designed to fit your pocket and your lifestyle.",
      features: [
        "6.7-inch FHD+ foldable AMOLED display",
        "3.9-inch Flex Window cover screen",
        "50MP dual rear cameras with Nightography",
        "AI Photo Remaster & FlexCam modes",
        "3700mAh battery with fast charging",
        "IPX8 water resistance"
      ],
      specifications: {
        Display: "6.7-inch Foldable AMOLED, 120Hz",
        Cover: "3.9-inch Super AMOLED",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "8GB",
        Storage: "256GB / 512GB",
        "Main Camera": "50MP + 12MP",
        "Front Camera": "10MP",
        Battery: "3700mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3"
      },
      colors: [
        { name: "Graphite", code: "#333333", image: "assets/products/flip7-graphite.webp" },
        { name: "Yellow", code: "#F5DC00", image: "assets/products/flip7-yellow.webp" },
        { name: "Mint", code: "#A3D6C5", image: "assets/products/flip7-mint.webp" },
        { name: "Blue", code: "#4A90E2", image: "assets/products/flip7-blue.webp" }
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true }
      ],
      inStock: true,
      category: "Z Series",
      releaseDate: "July 2025",
      dimensions: "165.1 x 71.9 x 6.9 mm (unfolded)",
      weight: "188g",
      display: "6.7-inch AMOLED + 3.9-inch Flex Window",
      camera: "Dual camera: 50MP wide, 12MP ultrawide",
      battery: "3700mAh with 25W wired, 15W wireless charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "USB-C", "NFC"],
      sensors: ["Accelerometer", "Gyro", "Proximity", "Ambient Light", "Fingerprint (Side)"],
      boxContents: ["Galaxy Z Flip7", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Enhanced Flex Window",
        "Pocket-sized design",
        "AI-powered camera modes",
        "Water-resistant foldable",
        "Premium color options"
      ]
    }
    ,
    {
      id: "6",
      name: "Galaxy Z Flip7 FE",
      slug: "galaxy-z-flip7-fe",
      images: [
        "assets/products/flip-7fe.webp",
        // "assets/products/flip7fe-2.webp",
        // "assets/products/flip7fe-3.webp"
      ],
      hoverImage: "assets/products/flip7fe-hover.webp",
      description: "A foldable experience now in the Fan Edition",
      longDescription:
        "Galaxy Z Flip7 FE brings the excitement of Samsung’s foldable tech to a wider audience. With a stylish compact build and capable cameras, it's the perfect entry into the world of foldables.",
      features: [
        "6.7-inch foldable AMOLED main display",
        "3.4-inch cover screen for notifications",
        "Dual rear cameras with Night Mode",
        "Snapdragon 7s Gen 2 processor",
        "3700mAh battery with 25W fast charging",
        "IPX8 water resistance"
      ],
      specifications: {
        Display: "6.7-inch Foldable AMOLED, 120Hz",
        Cover: "3.4-inch AMOLED",
        Processor: "Snapdragon 7s Gen 2",
        RAM: "8GB",
        Storage: "128GB / 256GB",
        "Main Camera": "12MP + 12MP",
        "Front Camera": "10MP",
        Battery: "3700mAh",
        OS: "Android 14 with One UI 6",
        Connectivity: "5G, Wi-Fi 6, Bluetooth 5.2"
      },
      colors: [
        { name: "Mint", code: "#BFF4E0", image: "assets/products/flip7fe-mint.webp" },
        { name: "Lilac", code: "#C6B1E4", image: "assets/products/flip7fe-lilac.webp" },
        { name: "Gray", code: "#444444", image: "assets/products/flip7fe-gray.webp" }
      ],
      storage: [
        { size: "128GB", available: true },
        { size: "256GB", available: true }
      ],
      inStock: true,
      category: "Z Series",
      releaseDate: "July 2025",
      dimensions: "165.1 x 71.9 x 6.9 mm (unfolded)",
      weight: "189g",
      display: "6.7-inch AMOLED + 3.4-inch cover display",
      camera: "Dual camera: 12MP wide + ultrawide",
      battery: "3700mAh with 25W fast charging",
      processor: "Snapdragon 7s Gen 2",
      os: "Android 14 with One UI 6",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "USB-C", "NFC"],
      sensors: ["Accelerometer", "Gyro", "Proximity", "Ambient Light", "Side-mounted Fingerprint"],
      boxContents: ["Galaxy Z Flip7 FE", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Affordable foldable",
        "Stylish FE colors",
        "Water resistant design",
        "AI camera tools",
        "Fan Edition value"
      ]
    }
    ,
    {
      id: "7",
      name: "Galaxy Z Fold7",
      slug: "galaxy-z-fold7",
      images: [
        "assets/products/fold-7.webp",
        // "assets/products/fold7-2.webp",
        // "assets/products/fold7-3.webp"
      ],
      hoverImage: "assets/products/fold7-hover.webp",
      description: "The future unfolds with Galaxy AI and immersive multitasking",
      longDescription:
        "Galaxy Z Fold7 is a productivity powerhouse designed for the multitaskers and creators. With its expansive foldable screen, S Pen support, and Galaxy AI features, it transforms how you work, watch, and play.",
      features: [
        "7.6-inch foldable AMOLED 2X display",
        "6.3-inch cover display",
        "S Pen support (sold separately)",
        "Triple rear cameras with AI Nightography",
        "4400mAh battery with Super Fast Charging",
        "IPX8 water resistance",
        "Galaxy AI tools for productivity and translation"
      ],
      specifications: {
        Display: "7.6-inch Foldable AMOLED 2X, 120Hz",
        Cover: "6.3-inch AMOLED 2X, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "12GB / 16GB",
        Storage: "256GB / 512GB / 1TB",
        "Main Camera": "50MP + 12MP + 10MP",
        "Front Camera": "10MP + 4MP UDC",
        Battery: "4400mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3"
      },
      colors: [
        { name: "Phantom Black", code: "#000000", image: "assets/products/fold7-black.webp" },
        { name: "Navy Blue", code: "#1D3557", image: "assets/products/fold7-blue.webp" },
        { name: "Silver Titanium", code: "#B0BEC5", image: "assets/products/fold7-silver.webp" }
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true },
        { size: "1TB", available: true }
      ],
      inStock: true,
      category: "Z Series",
      releaseDate: "July 2025",
      dimensions: "154.9 x 129.9 x 5.8 mm (unfolded)",
      weight: "239g",
      display: "7.6-inch inner + 6.3-inch outer AMOLED",
      camera: "Triple: 50MP main, 12MP ultrawide, 10MP telephoto",
      battery: "4400mAh with 25W wired and wireless charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "USB-C", "NFC"],
      sensors: ["Fingerprint (Side)", "Gyro", "Compass", "Light", "Proximity", "Accelerometer"],
      boxContents: ["Galaxy Z Fold7", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "AI-powered foldable experience",
        "Large screen multitasking",
        "S Pen compatibility",
        "Pro-grade cameras",
        "Premium titanium finish"
      ]
    }
    ,
    {
      id: "8",
      name: "Galaxy Tab S10 Ultra",
      slug: "galaxy-tab-s10-ultra",
      images: [
        "assets/products/s10-ultra.webp",
        // "assets/products/tab-s10-ultra-2.webp",
        // "assets/products/tab-s10-ultra-3.webp"
      ],
      hoverImage: "assets/products/tab-s10-ultra-hover.webp",
      description: "Your ultimate canvas for work, creativity, and entertainment",
      longDescription:
        "The Galaxy Tab S10 Ultra redefines tablet productivity with a massive 14.6-inch Super AMOLED display, powerful Snapdragon processor, and an enhanced S Pen. Perfect for creators, professionals, and media lovers.",
      features: [
        "14.6-inch Super AMOLED display",
        "120Hz refresh rate with HDR10+",
        "S Pen with low-latency writing",
        "Dual front cameras with 4K video",
        "11200mAh battery with 45W charging",
        "Quad speakers tuned by AKG",
        "Samsung DeX support"
      ],
      specifications: {
        Display: "14.6-inch Super AMOLED, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "12GB / 16GB",
        Storage: "256GB / 512GB / 1TB",
        "Main Camera": "13MP + 8MP ultrawide",
        "Front Camera": "12MP + 12MP ultrawide",
        Battery: "11200mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3"
      },
      colors: [
        { name: "Graphite", code: "#2C2C2C", image: "assets/products/tab-s10-graphite.webp" },
        { name: "Silver", code: "#E0E0E0", image: "assets/products/tab-s10-silver.webp" }
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true },
        { size: "1TB", available: true }
      ],
      inStock: true,
      category: "Tablet",
      releaseDate: "August 2025",
      dimensions: "208.6 x 326.4 x 5.5 mm",
      weight: "732g",
      display: "14.6-inch Super AMOLED, 2960 x 1848, 120Hz",
      camera: "Dual rear: 13MP + 8MP | Dual front: 12MP + 12MP",
      battery: "11200mAh with 45W Super Fast Charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "USB-C", "NFC"],
      sensors: ["Accelerometer", "Gyroscope", "Fingerprint (Under Display)", "Ambient Light", "Compass"],
      boxContents: ["Galaxy Tab S10 Ultra", "S Pen", "USB-C Cable", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "14.6-inch immersive display",
        "Enhanced S Pen performance",
        "Desktop-like DeX mode",
        "Massive battery life",
        "Flagship tablet performance"
      ]
    }
    ,
    {
      id: "9",
      name: "Galaxy S24 FE",
      slug: "galaxy-s24-fe",
      images: [
        "assets/products/s24-fe.webp",
        // "assets/products/s24fe-2.webp",
        // "assets/products/s24fe-3.webp"
      ],
      hoverImage: "assets/products/s24fe-hover.webp",
      description: "Flagship essentials with fan-favorite features at a great value",
      longDescription:
        "The Galaxy S24 FE delivers a premium smartphone experience with powerful performance, vivid display, and pro-grade cameras—all in a sleek design that fits your lifestyle and your budget.",
      features: [
        "6.4-inch Dynamic AMOLED 2X display",
        "Triple-lens pro-grade camera",
        "4500mAh battery with fast charging",
        "Gorilla Glass 5 protection",
        "IP68 water and dust resistance",
        "Samsung Knox security",
        "Wireless and reverse wireless charging"
      ],
      specifications: {
        Display: "6.4-inch Dynamic AMOLED 2X, 120Hz",
        Processor: "Exynos 2400 / Snapdragon 8 Gen 2 (region-specific)",
        RAM: "8GB",
        Storage: "128GB / 256GB",
        "Main Camera": "50MP + 12MP + 8MP",
        "Front Camera": "10MP",
        Battery: "4500mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3"
      },
      colors: [
        { name: "Graphite", code: "#2F2F2F", image: "assets/products/s24fe-graphite.webp" },
        { name: "Mint", code: "#A2E4C0", image: "assets/products/s24fe-mint.webp" },
        { name: "Lavender", code: "#E6DAF3", image: "assets/products/s24fe-lavender.webp" },
        { name: "Cream", code: "#FDF6E3", image: "assets/products/s24fe-cream.webp" }
      ],
      storage: [
        { size: "128GB", available: true },
        { size: "256GB", available: true }
      ],
      inStock: true,
      category: "S Series",
      releaseDate: "October 2024",
      dimensions: "158.0 x 76.5 x 8.2 mm",
      weight: "209g",
      display: "6.4-inch AMOLED, FHD+, 120Hz",
      camera: "Triple rear: 50MP wide, 12MP ultrawide, 8MP telephoto | Front: 10MP",
      battery: "4500mAh with 25W wired, 15W wireless charging",
      processor: "Exynos 2400 or Snapdragon 8 Gen 2",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "USB-C", "NFC"],
      sensors: ["Accelerometer", "Gyroscope", "Fingerprint (Under Display)", "Proximity", "Light Sensor"],
      boxContents: ["Galaxy S24 FE", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Pro-grade triple camera",
        "Fan Edition flagship features",
        "Vibrant 120Hz AMOLED screen",
        "IP68 durability",
        "Affordable performance"
      ]
    }
    ,
    {
      id: "10",
      name: "Galaxy S25 Edge",
      slug: "edge",
      images: [
        "assets/products/s25edge.webp",
        // "assets/products/s25edge-2.webp",
        // "assets/products/s25edge-3.webp"
      ],
      hoverImage: "assets/products/s25edge-hover.webp",
      description: "Curved-edge brilliance meets AI-powered performance",
      longDescription:
        "Galaxy S25 Edge brings back the iconic edge screen design with next-gen Galaxy AI enhancements. Experience immersive visuals, curved elegance, and professional-grade cameras in a powerful package.",
      features: [
        "6.7-inch curved AMOLED 2X display",
        "50MP triple rear camera",
        "Galaxy AI photo & translation tools",
        "4800mAh battery with Super Fast Charging",
        "Edge Panel for quick tools",
        "IP68 water resistance",
        "Samsung DeX and Wireless PowerShare"
      ],
      specifications: {
        Display: "6.7-inch Curved AMOLED 2X, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "12GB",
        Storage: "256GB / 512GB",
        "Main Camera": "50MP + 12MP + 10MP",
        "Front Camera": "12MP",
        Battery: "4800mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3"
      },
      colors: [
        { name: "Phantom Black", code: "#000000", image: "assets/products/s25edge-black.webp" },
        { name: "Ice Blue", code: "#E0F7FA", image: "assets/products/s25edge-blue.webp" },
        { name: "Rose Pink", code: "#FCD1D1", image: "assets/products/s25edge-pink.webp" }
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true }
      ],
      inStock: true,
      category: "S Series",
      releaseDate: "February 2025",
      dimensions: "161.7 x 74.5 x 7.9 mm",
      weight: "196g",
      display: "6.7-inch curved AMOLED, QHD+, 120Hz",
      camera: "Triple: 50MP main, 12MP ultrawide, 10MP telephoto | Front: 12MP",
      battery: "4800mAh with 45W wired, 15W wireless charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "USB-C", "NFC"],
      sensors: ["Accelerometer", "Gyroscope", "Fingerprint (Under Display)", "Compass", "Light", "Proximity"],
      boxContents: ["Galaxy S25 Edge", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Signature edge screen design",
        "AI-enhanced camera and tools",
        "Immersive curved AMOLED",
        "Powerful Snapdragon chip",
        "Elegant and futuristic build"
      ]
    }
    ,
    {
      id: "11",
      name: "Galaxy S25 Ultra",
      slug: "ultra",
      images: [
        "assets/products/s25.webp",
        // "assets/products/s25-2.webp",
        // "assets/products/s25-3.webp",
        // "assets/products/s25-4.webp"
      ],
      hoverImage: "assets/products/s25-hover.webp",
      description: "The ultimate Galaxy experience with S Pen and AI photography",
      longDescription:
        "Experience the pinnacle of mobile innovation with the Galaxy S25 Ultra. Featuring an advanced S Pen, revolutionary AI photography, and a stunning 6.8-inch Dynamic AMOLED 2X display, this flagship device redefines what's possible in a smartphone.",
      features: [
        "Built-in S Pen with Air Actions",
        "200MP main camera with AI enhancement",
        "6.8-inch Dynamic AMOLED 2X display",
        "5000mAh battery with 45W fast charging",
        "IP68 water and dust resistance",
        "Ultrasonic fingerprint sensor",
        "Wireless PowerShare",
        "Samsung DeX support"
      ],
      specifications: {
        Display: "6.8-inch Dynamic AMOLED 2X, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "12GB",
        Storage: "256GB / 512GB / 1TB",
        "Main Camera": "200MP + 50MP + 10MP + 12MP",
        "Front Camera": "12MP",
        Battery: "5000mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3"
      },
      colors: [
        { name: "Phantom Black", code: "#000000", image: "assets/products/s25-black.webp" },
        { name: "Cream", code: "#F5F5DC", image: "assets/products/s25-cream.webp" },
        { name: "Green", code: "#006644", image: "assets/products/s25-green.webp" },
        { name: "Blue", code: "#000080", image: "assets/products/s25-blue.webp" }
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true },
        { size: "1TB", available: true }
      ],
      inStock: true,
      category: "S Series",
      releaseDate: "January 2025",
      dimensions: "162.3 x 79.0 x 8.6 mm",
      weight: "232g",
      display: "6.8-inch Dynamic AMOLED 2X, 3120 x 1440, 120Hz",
      camera: "Quad camera: 200MP main, 50MP periscope, 10MP telephoto, 12MP ultrawide",
      battery: "5000mAh with 45W wired, 15W wireless charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC", "USB-C"],
      sensors: ["Accelerometer", "Barometer", "Gyro", "Geomagnetic", "Hall", "Proximity", "Ambient Light"],
      boxContents: ["Galaxy S25 Ultra", "S Pen", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "S Pen included with Air Actions",
        "200MP camera with AI photography",
        "All-day 5000mAh battery",
        "Premium titanium build",
        "IP68 water resistance"
      ]
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const slug = params["slug"]
      this.loadProduct(slug)
    })
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  private loadProduct(slug: string): void {
    this.isLoading = true
    this.notFound = false

    // Simulate API call delay
    setTimeout(() => {
      const product = this.allProducts.find((p) => p.slug === slug)

      if (product) {
        this.product = product
        this.loadRelatedProducts()
        this.notFound = false
      } else {
        this.notFound = true
        this.product = null
      }

      this.isLoading = false
    }, 500)
  }

  private loadRelatedProducts(): void {
    if (!this.product) return

    // Get products from same category, excluding current product
    this.relatedProducts = this.allProducts
      .filter((p) => p.category === this.product!.category && p.id !== this.product!.id)
      .slice(0, 3)
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index
  }

  selectColor(index: number): void {
    this.selectedColorIndex = index
  }

  selectStorage(index: number): void {
    this.selectedStorageIndex = index
  }

  goToProduct(slug: string): void {
    this.router.navigate(["/product", slug])
  }

  goBack(): void {
    this.router.navigate(["/"])
  }

  whatsappEnquiry(): void {
    const productName = this.product?.name || "Samsung Product"
    const message = encodeURIComponent(`Hi! I'm interested in the ${productName}. Can you provide more details?`)
    const phone = "+919371066000"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  callStore(): void {
    window.open("tel:+919371066000", "_self")
  }

  shareProduct(): void {
    if (navigator.share && this.product) {
      navigator.share({
        title: this.product.name,
        text: this.product.description,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You can add a toast notification here
    }
  }
}
