import { Component, type OnInit, type OnDestroy } from "@angular/core"
import  { ActivatedRoute, Router } from "@angular/router"
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
      name: "Galaxy S25 Ultra",
      slug: "galaxy-s25-ultra",
      images: [
        "assets/products/s25-1.webp",
        "assets/products/s25-2.webp",
        "assets/products/s25-3.webp",
        "assets/products/s25-4.webp",
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
        "Samsung DeX support",
      ],
      specifications: {
        Display: "6.8-inch Dynamic AMOLED 2X, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "12GB",
        Storage: "256GB/512GB/1TB",
        "Main Camera": "200MP + 50MP + 10MP + 12MP",
        "Front Camera": "12MP",
        Battery: "5000mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
      },
      colors: [
        { name: "Phantom Black", code: "#000000", image: "assets/products/s25-black.webp" },
        { name: "Cream", code: "#F5F5DC", image: "assets/products/s25-cream.webp" },
        { name: "Green", code: "#006644", image: "assets/products/s25-green.webp" },
        { name: "Blue", code: "#000080", image: "assets/products/s25-blue.webp" },
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true },
        { size: "1TB", available: true },
      ],
      inStock: true,
      category: "S Series",
      releaseDate: "January 2024",
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
        "IP68 water resistance",
      ],
    },
    {
      id: "2",
      name: "Galaxy S25",
      slug: "galaxy-s25",
      images: [
        "assets/products/s25-simple-1.webp",
        "assets/products/s25-simple-2.webp",
        "assets/products/s25-simple-3.webp",
      ],
      hoverImage: "assets/products/s25-simple-hover.webp",
      description: "Premium performance with enhanced camera capabilities",
      longDescription:
        "The Galaxy S25 delivers flagship performance in a refined design. With advanced camera technology, powerful processing, and elegant aesthetics, it's the perfect balance of innovation and style.",
      features: [
        "50MP triple camera system",
        "6.2-inch Dynamic AMOLED 2X display",
        "4000mAh battery with 25W fast charging",
        "IP68 water and dust resistance",
        "Ultrasonic fingerprint sensor",
        "Wireless charging support",
        "Samsung DeX compatibility",
      ],
      specifications: {
        Display: "6.2-inch Dynamic AMOLED 2X, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "8GB",
        Storage: "128GB/256GB",
        "Main Camera": "50MP + 12MP + 10MP",
        "Front Camera": "12MP",
        Battery: "4000mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      },
      colors: [
        { name: "Phantom Navy", code: "#000080", image: "assets/products/s25-navy.webp" },
        { name: "Cream", code: "#DDEEFF", image: "assets/products/s25-cream.webp" },
        { name: "Mint", code: "#98D5C2", image: "assets/products/s25-mint.webp" },
        { name: "Silver", code: "#C0C0C0", image: "assets/products/s25-silver.webp" },
      ],
      storage: [
        { size: "128GB", available: true },
        { size: "256GB", available: true },
      ],
      inStock: true,
      category: "S Series",
      releaseDate: "January 2024",
      dimensions: "146.3 x 70.9 x 7.6 mm",
      weight: "167g",
      display: "6.2-inch Dynamic AMOLED 2X, 2340 x 1080, 120Hz",
      camera: "Triple camera: 50MP main, 12MP ultrawide, 10MP telephoto",
      battery: "4000mAh with 25W wired, 15W wireless charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "USB-C"],
      sensors: ["Accelerometer", "Barometer", "Gyro", "Geomagnetic", "Hall", "Proximity", "Ambient Light"],
      boxContents: ["Galaxy S25", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "50MP advanced camera system",
        "Compact premium design",
        "All-day battery life",
        "Flagship performance",
        "IP68 durability",
      ],
    },
    {
      id: "3",
      name: "Galaxy Z Fold6",
      slug: "galaxy-z-fold6",
      images: ["assets/products/z-fold-6-1.webp", "assets/products/z-fold-6-2.webp", "assets/products/z-fold-6-3.webp"],
      hoverImage: "assets/products/z-fold-6-hover.webp",
      description: "Unfold your world with the ultimate foldable experience",
      longDescription:
        "The Galaxy Z Fold6 represents the future of mobile technology. With its revolutionary foldable design, you get a phone and tablet in one device, perfect for multitasking, creativity, and entertainment.",
      features: [
        "7.6-inch main foldable display",
        "6.2-inch cover display",
        "50MP triple camera system",
        "4400mAh dual battery",
        "S Pen support (sold separately)",
        "Enhanced multitasking with Multi-Active Window",
        "Flex Mode for hands-free use",
        "IPX8 water resistance",
      ],
      specifications: {
        "Main Display": "7.6-inch Dynamic AMOLED 2X, 120Hz",
        "Cover Display": "6.2-inch Dynamic AMOLED 2X, 120Hz",
        Processor: "Snapdragon 8 Gen 3 for Galaxy",
        RAM: "12GB",
        Storage: "256GB/512GB/1TB",
        "Main Camera": "50MP + 12MP + 10MP",
        "Front Camera": "10MP + 4MP under display",
        Battery: "4400mAh",
        OS: "Android 14 with One UI 6.1",
        Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      },
      colors: [
        { name: "Phantom Black", code: "#000000", image: "assets/products/fold6-black.webp" },
        { name: "Silver Shadow", code: "#6666FF", image: "assets/products/fold6-silver.webp" },
        { name: "Pink", code: "#FFD700", image: "assets/products/fold6-pink.webp" },
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true },
        { size: "1TB", available: false },
      ],
      inStock: true,
      category: "Z Series",
      releaseDate: "July 2024",
      dimensions: "153.5 x 132.6 x 6.1 mm (unfolded)",
      weight: "239g",
      display: "7.6-inch foldable + 6.2-inch cover display",
      camera: "Triple camera: 50MP main, 12MP ultrawide, 10MP telephoto",
      battery: "4400mAh with 25W wired, 15W wireless charging",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      os: "Android 14 with One UI 6.1",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "USB-C"],
      sensors: ["Accelerometer", "Barometer", "Gyro", "Geomagnetic", "Hall", "Proximity", "Ambient Light"],
      boxContents: ["Galaxy Z Fold6", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Revolutionary foldable design",
        "Dual display experience",
        "Enhanced multitasking",
        "S Pen compatibility",
        "Premium build quality",
      ],
    },
    {
      id: "4",
      name: "Galaxy Z Flip5",
      slug: "galaxy-z-flip5",
      images: ["assets/products/z-flip-5-1.webp", "assets/products/z-flip-5-2.webp", "assets/products/z-flip-5-3.webp"],
      hoverImage: "assets/products/z-flip-5-hover.webp",
      description: "Take your best selfies, hands-down and hands-free",
      longDescription:
        "The Galaxy Z Flip5 combines style and innovation in a compact foldable design. With its large cover screen and improved hinge, it's perfect for those who want cutting-edge technology in a pocket-friendly form factor.",
      features: [
        "6.7-inch main foldable display",
        "3.4-inch cover display",
        "12MP dual camera system",
        "3700mAh battery",
        "Flex Mode for creative photography",
        "Compact foldable design",
        "IPX8 water resistance",
        "Wireless PowerShare",
      ],
      specifications: {
        "Main Display": "6.7-inch Dynamic AMOLED 2X, 120Hz",
        "Cover Display": "3.4-inch Super AMOLED",
        Processor: "Snapdragon 8 Gen 2 for Galaxy",
        RAM: "8GB",
        Storage: "256GB/512GB",
        "Main Camera": "12MP + 12MP",
        "Front Camera": "10MP",
        Battery: "3700mAh",
        OS: "Android 13 with One UI 5.1",
        Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
      },
      colors: [
        { name: "Phantom Black", code: "#000000", image: "assets/products/flip5-black.webp" },
        { name: "Lavender", code: "#8B5CF6", image: "assets/products/flip5-lavender.webp" },
        { name: "Cream", code: "#FFD700", image: "assets/products/flip5-cream.webp" },
        { name: "Mint", code: "#06B6D4", image: "assets/products/flip5-mint.webp" },
      ],
      storage: [
        { size: "256GB", available: true },
        { size: "512GB", available: true },
      ],
      inStock: true,
      category: "Z Series",
      releaseDate: "August 2023",
      dimensions: "165.1 x 71.9 x 6.9 mm (unfolded)",
      weight: "187g",
      display: "6.7-inch foldable + 3.4-inch cover display",
      camera: "Dual camera: 12MP main, 12MP ultrawide",
      battery: "3700mAh with 25W wired, 15W wireless charging",
      processor: "Snapdragon 8 Gen 2 for Galaxy",
      os: "Android 13 with One UI 5.1",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "USB-C"],
      sensors: ["Accelerometer", "Barometer", "Gyro", "Geomagnetic", "Hall", "Proximity", "Ambient Light"],
      boxContents: ["Galaxy Z Flip5", "USB-C Cable", "SIM Ejector Tool", "Quick Start Guide"],
      warranty: "1 Year Manufacturer Warranty",
      keyHighlights: [
        "Compact foldable design",
        "Large 3.4-inch cover screen",
        "Hands-free photography",
        "Premium build quality",
        "All-day battery life",
      ],
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

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
