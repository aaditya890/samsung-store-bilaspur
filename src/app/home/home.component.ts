import {
  Component,
 OnInit,
 OnDestroy,
 AfterViewInit,
  ViewChildren,
  ElementRef,
 QueryList,
  HostListener,
} from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router, RouterLink } from "@angular/router"

interface Product {
  id: string
  name: string
  image: string
  price?: number
}

interface EnhancedProduct extends Product {
  hoverImage: string
  description: string
  colors: string[]
  isHovered: boolean
  isVisible: boolean
}

interface Review {
  name: string
  role: string
  avatar: string
  content: string
  device: string
  date: string
  rating: number
}

interface ProductSlug {
  id: string
  slug: string
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  title = "samsung-clone"
  emailText = "support@aarvimobiles.com"
  src: string | null = null
  Math = Math
  currentSlide = 0
  autoSlideInterval: any
  itemsPerSlide = 4 // Default for desktop

  // Product display properties
  showAllProducts = false
  initialProductCount = 4 // Show 4 products initially

 private productSlugs: ProductSlug[] = [
  { id: "1", slug: "galaxy-a16" },
  { id: "2", slug: "galaxy-a36" },
  { id: "3", slug: "galaxy-a56" },
  { id: "4", slug: "galaxy-book5-pro" },
  { id: "5", slug: "galaxy-z-flip7" },
  { id: "6", slug: "galaxy-z-flip7-fe" },
  { id: "7", slug: "galaxy-z-fold7" },
  { id: "8", slug: "galaxy-tab-s10-ultra" },
  { id: "9", slug: "galaxy-s24-fe" },
  { id: "10", slug: "edge" },
  { id: "11", slug: "ultra" },
];

  @ViewChildren("lazyRef", { read: ElementRef }) lazyElements!: QueryList<ElementRef>
  visibleMap: { [key: string]: boolean } = {}

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Load background video after delay
    setTimeout(() => {
      this.src = "assets/bg.mp4"
    }, 100)

    // IntersectionObserver with rootMargin for image preload
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-lazy-id")
          if (entry.isIntersecting && id && !this.visibleMap[id]) {
            this.visibleMap[id] = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: "200px 0px", // preload 200px before entering view
        threshold: 0.01, // very slight intersection needed
      },
    )

    // Observe all lazy image containers
    setTimeout(() => {
      this.lazyElements.forEach((el) => observer.observe(el.nativeElement))
    }, 100)
  }

mobileProducts: EnhancedProduct[] = [
  {
    id: "1",
    name: "Galaxy A16",
    image: "assets/products/a16.webp",
    hoverImage: "assets/products/a16.webp",
    price: 12999,
    description: "Entry‑level smartphone with long‑lasting battery",
    colors: ["#000000", "#FFFFFF", "#FFD180"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "2",
    name: "Galaxy A36",
    image: "assets/products/a36.webp",
    hoverImage: "assets/products/a36.webp",
    price: 19999,
    description: "Affordable Galaxy phone with decent cameras",
    colors: ["#000000", "#EEEEEE", "#90CAF9"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "3",
    name: "Galaxy A56",
    image: "assets/products/a56.webp",
    hoverImage: "assets/products/a56.webp",
    price: 24999,
    description: "Mid‑range smartphone with AMOLED display & good battery",
    colors: ["#000000", "#FFF8E1", "#A5D6A7"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "4",
    name: "Galaxy Book5 Pro",
    image: "assets/products/book-5pro.webp",
    hoverImage: "assets/products/book-5pro.webp",
    price: 119999,
    description: "High-performance Windows laptop with OLED display",
    colors: ["#444444", "#AAAAAA"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "5",
    name: "Galaxy Z Flip7",
    image: "assets/products/flip-7.webp",
    hoverImage: "assets/products/flip-7.webp",
    price: 129999,
    description: "Compact foldable with FlexWindow & enhanced AI cam",
    colors: ["#1A1A1A", "#345A8F", "#F05A4B", "#A2D2B1"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "6",
    name: "Galaxy Z Flip7 FE",
    image: "assets/products/flip-7fe.webp",
    hoverImage: "assets/products/flip-7fe.webp",
    price: 79999,
    description: "Affordable version of Flip7, same FlexWindow",
    colors: ["#000000", "#FFFFFF"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "7",
    name: "Galaxy Z Fold7",
    image: "assets/products/fold-7.webp",
    hoverImage: "assets/products/fold-7.webp",
    price: 179999,
    description: "Ultra-slim 8\" foldable with 200 MP camera & Galaxy AI",
    colors: ["#1A1A1A", "#345A8F", "#C0C0C0", "#86B799"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "8",
    name: "Galaxy Tab S10 Ultra",
    image: "assets/products/s10-ultra.webp",
    hoverImage: "assets/products/s10-ultra.webp",
    price: 99999,
    description: "Flagship tablet with 14.6” AMOLED, S Pen, and dual batteries",
    colors: ["#000000", "#B0B0B0"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "9",
    name: "Galaxy S24 FE",
    image: "assets/products/s24-fe.webp",
    hoverImage: "assets/products/s24-fe.webp",
    price: 39999,
    description: "Fan Edition with solid specs at great value",
    colors: ["#000000", "#FFFFFF", "#AA00CC", "#00AAFF"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "10",
    name: "Galaxy S25 Edge",
    image: "assets/products/s25edge.webp",
    hoverImage: "assets/products/s25edge.webp",
    price: 109999,
    description: "Curved‑edge version of S25 with AI enhancements",
    colors: ["#000000", "#C0C0C0", "#FFE4E1", "#F5F5F5"],
    isHovered: false,
    isVisible: false,
  },
  {
    id: "11",
    name: "Galaxy S25 Ultra",
    image: "assets/products/s25.webp",
    hoverImage: "assets/products/s25-hover.webp",
    price: 129999,
    description: "Flagship titanium phone with S Pen & AI camera",
    colors: ["#333F4E", "#B3C9C2", "#D9C2C2", "#E8E8E8", "#4C4C4C", "#FFC0CB", "#F5F5F5"],
    isHovered: false,
    isVisible: false,
  },
];



  // Get products to display based on showAllProducts state
  get displayedProducts(): EnhancedProduct[] {
    return this.showAllProducts ? this.mobileProducts : this.mobileProducts.slice(0, this.initialProductCount)
  }

  // Toggle show all products
  toggleShowAllProducts(): void {
    this.showAllProducts = !this.showAllProducts

    // Always scroll to products section for better UX
    setTimeout(() => {
      const element = document.getElementById("products-section")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  productCategories: any[] = [
    {
      id: "s-series",
      name: "S Series",
      description: "Premium flagship smartphones with cutting-edge technology",
      image: "assets/category/s-series.png",
      modelCount: 8,
    },
    {
      id: "z-series",
      name: "Z Series",
      description: "Revolutionary foldable phones that redefine mobile experience",
      image: "assets/category/z-series.png",
      modelCount: 4,
    },
    {
      id: "fold-series",
      name: "Fold Series",
      description: "Ultimate productivity with tablet-sized foldable displays",
      image: "assets/category/fold-series.png",
      modelCount: 3,
    },
    {
      id: "tablets",
      name: "Tablets",
      description: "Powerful tablets for creativity, productivity and entertainment",
      image: "assets/category/tablet.png",
      modelCount: 12,
    },
    {
      id: "watches",
      name: "Watches",
      description: "Smart wearables for health, fitness and connectivity",
      image: "assets/category/watch.png",
      modelCount: 6,
    },
    {
      id: "Galaxy Buds",
      name: "Buds",
      description: "Smart wearables for health, fitness and connectivity",
      image: "assets/category/bud.png",
      modelCount: 6,
    },
  ]

  reviews: Review[] = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      avatar: "assets/review-users/w-1.jpg",
      content:
        "Purchased the Galaxy S24 Ultra from the Samsung Authorized Store in Bilaspur. Excellent service and genuine product. S Pen is a productivity game-changer!",
      device: "Galaxy S24 Ultra",
      date: "2 months ago",
      rating: 5,
    },
    {
      name: "Rahul Gupta",
      role: "Digital Creator",
      avatar: "assets/review-users/men-1.jpg",
      content:
        "Bought my Galaxy Z Fold5 from the Bilaspur Samsung dealer. Super smooth buying process. Staff was helpful and explained every feature well.",
      device: "Galaxy Z Fold5",
      date: "1 month ago",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "Business Owner",
      avatar: "assets/review-users/w-2.jpg",
      content:
        "The Galaxy Z Flip5 I got from this store is perfect. Compact and stylish. Sales team helped me with setup too.",
      device: "Galaxy Z Flip5",
      date: "3 weeks ago",
      rating: 4,
    },
    {
      name: "Vikram Singh",
      role: "Photographer",
      avatar: "assets/review-users/men-2.jpg",
      content:
        "Bought the S24+ from Bilaspur's Samsung store — best place for camera lovers! They also suggested great accessories.",
      device: "Galaxy S24+",
      date: "6 weeks ago",
      rating: 5,
    },
    {
      name: "Meera Joshi",
      role: "Marketing Manager",
      avatar: "assets/review-users/w-3.jpg",
      content:
        "Got my Galaxy Watch6 from here. Staff was polite and knowledgeable. They even helped me sync it with my phone!",
      device: "Galaxy Watch6",
      date: "4 months ago",
      rating: 4,
    },
    {
      name: "Arjun Reddy",
      role: "Student",
      avatar: "assets/review-users/men-3.jpg",
      content:
        "Purchased Tab S9 from this Bilaspur outlet. Very helpful staff, explained how to use S Pen for studies. Smooth experience!",
      device: "Galaxy Tab S9",
      date: "2 months ago",
      rating: 5,
    },
    {
      name: "Kavya Nair",
      role: "Fitness Trainer",
      avatar: "assets/review-users/w-4.jpg",
      content:
        "Bought Galaxy Buds2 Pro from Samsung dealer Bilaspur. Loved their quick demo and billing process. Great sound too!",
      device: "Galaxy Buds2 Pro",
      date: "5 weeks ago",
      rating: 4,
    },
    {
      name: "Rohit Kumar",
      role: "Entrepreneur",
      avatar: "assets/review-users/men-4.jpg",
      content:
        "Got my Galaxy S24 at the Samsung Bilaspur store. Hassle-free EMI and friendly service. Highly recommended!",
      device: "Galaxy S24",
      date: "7 weeks ago",
      rating: 5,
    },
    {
      name: "Sonal Mehta",
      role: "College Student",
      avatar: "assets/review-users/men-5.jpg",
      content:
        "Very happy with my Galaxy Tab S9 FE. Bought it from this Samsung dealer and they even installed free apps for classes.",
      device: "Galaxy Tab S9 FE",
      date: "3 weeks ago",
      rating: 4,
    },
    {
      name: "Naveen Batra",
      role: "IT Consultant",
      avatar: "assets/review-users/men-6.jpg",
      content:
        "Purchased Galaxy Watch6 Classic from Bilaspur Samsung store. Very clean shop and explained everything patiently.",
      device: "Galaxy Watch6 Classic",
      date: "2 weeks ago",
      rating: 5,
    },
    {
      name: "Tanya Desai",
      role: "Fashion Blogger",
      avatar: "assets/review-users/w-7.jpg",
      content:
        "Loved shopping for the Galaxy Z Flip5 here. Great range and genuine accessories too. The color options were awesome.",
      device: "Galaxy Z Flip5",
      date: "1 month ago",
      rating: 5,
    },
    {
      name: "Deepak Yadav",
      role: "Civil Engineer",
      avatar: "assets/review-users/men-7.jpg",
      content: "Got my S24 Ultra with exchange offer. The Samsung Bilaspur team made everything smooth and quick.",
      device: "Galaxy S24 Ultra",
      date: "2 months ago",
      rating: 5,
    },
    {
      name: "Neha Rawat",
      role: "Doctor",
      avatar: "assets/review-users/w-5.jpg",
      content:
        "Bought the Galaxy Watch6 here and got it configured within 5 minutes. Staff is really helpful and polite.",
      device: "Galaxy Watch6",
      date: "3 weeks ago",
      rating: 4,
    },
    {
      name: "Ramesh Iyer",
      role: "Retired Army Officer",
      avatar: "assets/review-users/men-8.jpg",
      content: "Purchased Tab A9 from this authorized dealer. Good pricing and even got a case free during offer!",
      device: "Galaxy Tab A9",
      date: "4 weeks ago",
      rating: 5,
    },
    {
      name: "Shreya Verma",
      role: "Interior Designer",
      avatar: "assets/review-users/w-6.jpg",
      content:
        "Picked up Buds2 Pro here after trying them in-store. They let me test and explained features in detail. Loved it!",
      device: "Galaxy Buds2 Pro",
      date: "6 weeks ago",
      rating: 4,
    },
  ]

  // Method to handle product navigation
  goToProductDetail(productId: string): void {
    console.log("Navigating to product detail for ID:", productId)
    const product = this.productSlugs.find((p) => p.id === productId)
    if (product) {
      this.router.navigate(["/product", product.slug])
    }
  }

  // Category hover functionality
  onCategoryHover(index: number, isHovered: boolean): void {
    this.productCategories[index].isHovered = isHovered
  }

  // Hover logic
  onProductHover(index: number, isHovered: boolean): void {
    this.mobileProducts[index].isHovered = isHovered
  }

  isVisible(id: string): boolean {
    return this.visibleMap[id] === true
  }

  whatsappEnquiry(): void {
    const message = encodeURIComponent("Hi Aarvi Ventures! I would like to know more.")
    const phone = "+919371066000"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  // Review Section Logic
  get totalSlideGroups(): number {
    return Math.ceil(this.reviews.length / this.itemsPerSlide)
  }

  get dots(): number[] {
    return Array(this.totalSlideGroups)
      .fill(0)
      .map((_, i) => i)
  }

  get currentDotIndex(): number {
    return Math.floor(this.currentSlide / this.itemsPerSlide)
  }

  get transformPercentage(): number {
    return this.currentSlide * (100 / this.itemsPerSlide)
  }

  get maxSlideIndex(): number {
    return Math.max(0, this.reviews.length - this.itemsPerSlide)
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any): void {
    const oldItemsPerSlide = this.itemsPerSlide
    this.updateItemsPerSlide()
    // Recalculate current slide position after resize
    if (oldItemsPerSlide !== this.itemsPerSlide) {
      const currentDot = Math.floor(this.currentSlide / oldItemsPerSlide)
      this.currentSlide = Math.min(currentDot * this.itemsPerSlide, this.maxSlideIndex)
    }
  }

  ngOnInit(): void {
    this.updateItemsPerSlide()
    this.startAutoSlide()
  }

  ngOnDestroy(): void {
    this.stopAutoSlide()
  }

  updateItemsPerSlide(): void {
    const width = window.innerWidth
    if (width < 640) {
      // sm
      this.itemsPerSlide = 1
    } else if (width < 768) {
      // md
      this.itemsPerSlide = 2
    } else if (width < 1024) {
      // lg
      this.itemsPerSlide = 3
    } else if (width < 1280) {
      // xl
      this.itemsPerSlide = 4
    } else {
      // 2xl and above
      this.itemsPerSlide = 5
    }
  }

  startAutoSlide(): void {
    this.stopAutoSlide() // Clear any existing interval
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide()
    }, 3000) // Slide every 3 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
      this.autoSlideInterval = null
    }
  }

  // Navigate to specific slide group (dot navigation)
  goToSlide(dotIndex: number): void {
    this.currentSlide = Math.min(dotIndex * this.itemsPerSlide, this.maxSlideIndex)
    // Restart auto-slide after manual navigation
    this.startAutoSlide()
  }

  nextSlide(): void {
    const nextSlide = this.currentSlide + this.itemsPerSlide
    if (nextSlide > this.maxSlideIndex) {
      this.currentSlide = 0 // Loop back to start
    } else {
      this.currentSlide = nextSlide
    }
  }

  // Pause auto-slide on hover
  onMouseEnter(): void {
    // this.stopAutoSlide()
  }

  // Resume auto-slide when mouse leaves
  onMouseLeave(): void {
    // this.startAutoSlide()
  }
}
