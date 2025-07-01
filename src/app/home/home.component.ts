import { RouterLink } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener } from "@angular/core"
import { CommonModule } from "@angular/common"

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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements AfterViewInit ,OnInit{
  title = 'samsung-clone';
  emailText = "support@aarvimobiles.com"
  src: string | null = null;
  Math = Math;
  currentSlide = 0
  autoSlideInterval: any
  itemsPerSlide = 4 // Default for desktop

  @ViewChildren('lazyRef', { read: ElementRef }) lazyElements!: QueryList<ElementRef>;

  visibleMap: { [key: string]: boolean } = {};

ngAfterViewInit(): void {
  // 🌟 1. Load background video after delay
  setTimeout(() => {
    this.src = 'assets/bg.mp4';
  });

  // 🌟 2. IntersectionObserver with rootMargin for image preload
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('data-lazy-id');
      if (entry.isIntersecting && id && !this.visibleMap[id]) {
        this.visibleMap[id] = true;
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '200px 0px', // preload 200px before entering view
    threshold: 0.01 // very slight intersection needed
  });

  // 🌟 3. Observe all lazy image containers
  this.lazyElements.forEach(el => observer.observe(el.nativeElement));
}


  mobileProducts: EnhancedProduct[] = [
    {
      id: "1",
      name: "Galaxy S25 Ultra",
      image: "assets/products/s25-1.webp",
      hoverImage: "assets/products/s25-hover.webp",
      price: 129999,
      description: "The ultimate Galaxy experience with S Pen and AI photography",
      colors: [
        "#000000", "#A0B0C0", "#808080", "#F0F0F0", "#006644", "#341122", "#D9A6A6"
      ],
      isHovered: false,
      isVisible: false
    },
    {
      id: "2",
      name: "Galaxy S25",
      image: "assets/products/s25-simple-1.webp",
      hoverImage: "assets/products/s25-simple-hover.webp",
      price: 99999,
      description: "Premium performance with enhanced camera capabilities",
      colors: [
        "#000080", "#DDEEFF", "#98D5C2", "#C0C0C0", "#FFC0CB", "#FF4444", "#1A1A1A"
      ],
      isHovered: false,
      isVisible: false
    },
    {
      id: "3",
      name: "Galaxy Z Fold6",
      image: "assets/products/z-fold-6-1.webp",
      hoverImage: "assets/products/z-fold-6-hover.webp",
      price: 164999,
      description: "Unfold your world with the ultimate foldable experience",
      colors: [
        "#000000", "#6666FF", "#FFD700"
      ],
      isHovered: false,
      isVisible: false
    },
    {
      id: "4",
      name: "Galaxy Z Flip5",
      image: "assets/products/z-flip-5-1.webp",
      hoverImage: "assets/products/z-flip-5-hover.webp",
      price: 99999,
      description: "Take your best selfies, hands-down and hands-free",
      colors: [
        "#000000", "#8B5CF6", "#FFD700", "#06B6D4"
      ],
      isHovered: false,
      isVisible: false
    }
  ];

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
      content: "Purchased the Galaxy S24 Ultra from the Samsung Authorized Store in Bilaspur. Excellent service and genuine product. S Pen is a productivity game-changer!",
      device: "Galaxy S24 Ultra",
      date: "2 months ago",
      rating: 5
    },
    {
      name: "Rahul Gupta",
      role: "Digital Creator",
      avatar: "assets/review-users/men-1.jpg",
      content: "Bought my Galaxy Z Fold5 from the Bilaspur Samsung dealer. Super smooth buying process. Staff was helpful and explained every feature well.",
      device: "Galaxy Z Fold5",
      date: "1 month ago",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Business Owner",
      avatar: "assets/review-users/w-2.jpg",
      content: "The Galaxy Z Flip5 I got from this store is perfect. Compact and stylish. Sales team helped me with setup too.",
      device: "Galaxy Z Flip5",
      date: "3 weeks ago",
      rating: 4
    },
    {
      name: "Vikram Singh",
      role: "Photographer",
      avatar: "assets/review-users/men-2.jpg",
      content: "Bought the S24+ from Bilaspur’s Samsung store — best place for camera lovers! They also suggested great accessories.",
      device: "Galaxy S24+",
      date: "6 weeks ago",
      rating: 5
    },
    {
      name: "Meera Joshi",
      role: "Marketing Manager",
      avatar: "assets/review-users/w-3.jpg",
      content: "Got my Galaxy Watch6 from here. Staff was polite and knowledgeable. They even helped me sync it with my phone!",
      device: "Galaxy Watch6",
      date: "4 months ago",
      rating: 4
    },
    {
      name: "Arjun Reddy",
      role: "Student",
      avatar: "assets/review-users/men-3.jpg",
      content: "Purchased Tab S9 from this Bilaspur outlet. Very helpful staff, explained how to use S Pen for studies. Smooth experience!",
      device: "Galaxy Tab S9",
      date: "2 months ago",
      rating: 5
    },
    {
      name: "Kavya Nair",
      role: "Fitness Trainer",
      avatar: "assets/review-users/w-4.jpg",
      content: "Bought Galaxy Buds2 Pro from Samsung dealer Bilaspur. Loved their quick demo and billing process. Great sound too!",
      device: "Galaxy Buds2 Pro",
      date: "5 weeks ago",
      rating: 4
    },
    {
      name: "Rohit Kumar",
      role: "Entrepreneur",
      avatar: "assets/review-users/men-4.jpg",
      content: "Got my Galaxy S24 at the Samsung Bilaspur store. Hassle-free EMI and friendly service. Highly recommended!",
      device: "Galaxy S24",
      date: "7 weeks ago",
      rating: 5
    },
    {
      name: "Sonal Mehta",
      role: "College Student",
      avatar: "assets/review-users/men-5.jpg",
      content: "Very happy with my Galaxy Tab S9 FE. Bought it from this Samsung dealer and they even installed free apps for classes.",
      device: "Galaxy Tab S9 FE",
      date: "3 weeks ago",
      rating: 4
    },
    {
      name: "Naveen Batra",
      role: "IT Consultant",
      avatar: "assets/review-users/men-6.jpg",
      content: "Purchased Galaxy Watch6 Classic from Bilaspur Samsung store. Very clean shop and explained everything patiently.",
      device: "Galaxy Watch6 Classic",
      date: "2 weeks ago",
      rating: 5
    },
    {
      name: "Tanya Desai",
      role: "Fashion Blogger",
      avatar: "assets/review-users/w-7.jpg",
      content: "Loved shopping for the Galaxy Z Flip5 here. Great range and genuine accessories too. The color options were awesome.",
      device: "Galaxy Z Flip5",
      date: "1 month ago",
      rating: 5
    },
    {
      name: "Deepak Yadav",
      role: "Civil Engineer",
      avatar: "assets/review-users/men-7.jpg",
      content: "Got my S24 Ultra with exchange offer. The Samsung Bilaspur team made everything smooth and quick.",
      device: "Galaxy S24 Ultra",
      date: "2 months ago",
      rating: 5
    },
    {
      name: "Neha Rawat",
      role: "Doctor",
      avatar: "assets/review-users/w-5.jpg",
      content: "Bought the Galaxy Watch6 here and got it configured within 5 minutes. Staff is really helpful and polite.",
      device: "Galaxy Watch6",
      date: "3 weeks ago",
      rating: 4
    },
    {
      name: "Ramesh Iyer",
      role: "Retired Army Officer",
      avatar: "assets/review-users/men-8.jpg",
      content: "Purchased Tab A9 from this authorized dealer. Good pricing and even got a case free during offer!",
      device: "Galaxy Tab A9",
      date: "4 weeks ago",
      rating: 5
    },
    {
      name: "Shreya Verma",
      role: "Interior Designer",
      avatar: "assets/review-users/w-6.jpg",
      content: "Picked up Buds2 Pro here after trying them in-store. They let me test and explained features in detail. Loved it!",
      device: "Galaxy Buds2 Pro",
      date: "6 weeks ago",
      rating: 4
    }
  ];

  // Add category hover functionality
  onCategoryHover(index: number, isHovered: boolean): void {
    this.productCategories[index].isHovered = isHovered
  }

  // Hover logic
  onProductHover(index: number, isHovered: boolean): void {
    this.mobileProducts[index].isHovered = isHovered;
  }

  isVisible(id: string): boolean {
    return this.visibleMap[id] === true;
  }

   whatsappEnquiry(){
    const message = encodeURIComponent("Hi Aarvi Ventures! I did like to know more.");
    const phone = "+919371066000";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  //  Review Section Logics -
  
  // Calculate total number of slide groups (pages)
  get totalSlideGroups(): number {
    return Math.ceil(this.reviews.length / this.itemsPerSlide)
  }

  // Calculate dots for pagination
  get dots(): number[] {
    return Array(this.totalSlideGroups).fill(0).map((_, i) => i)
  }

  // Get current active dot index
  get currentDotIndex(): number {
    return Math.floor(this.currentSlide / this.itemsPerSlide)
  }

  // Get transform percentage
  get transformPercentage(): number {
    return (this.currentSlide * (100 / this.itemsPerSlide))
  }

  // Get maximum slide index
  get maxSlideIndex(): number {
    return Math.max(0, this.reviews.length - this.itemsPerSlide)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
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
    if (width < 640) { // sm
      this.itemsPerSlide = 1
    } else if (width < 768) { // md
      this.itemsPerSlide = 2
    } else if (width < 1024) { // lg
      this.itemsPerSlide = 3
    } else if (width < 1280) { // xl
      this.itemsPerSlide = 4
    } else { // 2xl and above
      this.itemsPerSlide = 5
    }
  }

  startAutoSlide(): void {
    this.stopAutoSlide() // Clear any existing interval
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide()
    }, 3000) // Slide every 4 seconds
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
