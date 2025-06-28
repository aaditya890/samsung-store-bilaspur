import { RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, ElementRef, QueryList } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TestComponent } from "./test/test.component";
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
  isVisible:boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  title = 'samsung-clone';
  src: string | null = null;

@ViewChildren('lazyRef', { read: ElementRef }) lazyElements!: QueryList<ElementRef>;

visibleMap: { [key: string]: boolean } = {};

  ngAfterViewInit(): void {
    // Load video after delay
    setTimeout(() => {
      this.src = 'assets/bg.mp4';
    });

     // common observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('data-lazy-id');
      if (entry.isIntersecting && id && !this.visibleMap[id]) {
        this.visibleMap[id] = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // observe product images
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
      image: "assets/category/tablet.jpg",
      modelCount: 8,
    },
    {
      id: "z-series",
      name: "Z Series",
      description: "Revolutionary foldable phones that redefine mobile experience",
      image: "assets/category/bud.jpg",
      modelCount: 4,
    },
    {
      id: "fold-series",
      name: "Fold Series",
      description: "Ultimate productivity with tablet-sized foldable displays",
      image: "/placeholder.svg?height=160&width=120&text=Galaxy+Fold",
      modelCount: 3,
    },
    {
      id: "tablets",
      name: "Tablets",
      description: "Powerful tablets for creativity, productivity and entertainment",
      image: "/placeholder.svg?height=160&width=120&text=Galaxy+Tab",
      modelCount: 12,
    },
    {
      id: "watches",
      name: "Watches",
      description: "Smart wearables for health, fitness and connectivity",
      image: "/placeholder.svg?height=160&width=120&text=Galaxy+Watch",
      modelCount: 6,
    },
    {
      id: "Galaxy Buds",
      name: "Buds",
      description: "Smart wearables for health, fitness and connectivity",
      image: "/placeholder.svg?height=160&width=120&text=Galaxy+Watch",
      modelCount: 6,
    },
  ]


  
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

}

