import { RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core"
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
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit{
  title = "samsung-clone"
  src:string | null = null

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.src = 'assets/bg.mp4';
    }
  )};
mobileProducts: EnhancedProduct[] = [
  {
    id: "1",
    name: "Galaxy S25 Ultra",
    image: "assets/products/s25-1.png",
    hoverImage: "assets/products/s25-hover.png",
    price: 129999,
    description: "The ultimate Galaxy experience with S Pen and AI photography",
    colors: [
      "#000000", // Titanium Black
      "#A0B0C0", // Titanium Silverblue
      "#808080", // Titanium Grey
      "#F0F0F0", // Titanium Whitesilver
      "#006644", // Titanium Jadegreen (Samsung.com exclusive)
      "#341122", // Titanium Jetblack (Samsung.com exclusive)
      "#D9A6A6", // Titanium Pinkgold (Samsung.com exclusive)
    ],
    isHovered: false,
  },
  {
    id: "2",
    name: "Galaxy S25",
    image: "assets/products/s25-simple-1.png",
    hoverImage: "assets/products/s25-simple-hover.png",
    price: 99999,
    description: "Premium performance with enhanced camera capabilities",
    colors: [
      "#000080", // Navy
      "#DDEEFF", // Icy Blue
      "#98D5C2", // Mint
      "#C0C0C0", // Silver Shadow
      "#FFC0CB", // Pink Gold (Online exclusive)
      "#FF4444", // Coral Red (Online exclusive)
      "#1A1A1A", // Blue Black (Online exclusive)
    ],
    isHovered: false,
  },
  {
    id: "3",
    name: "Galaxy Z Fold6",
    image: "assets/products/z-fold-6-1.png",
    hoverImage: "assets/products/z-fold-6-hover.png",
    price: 164999,
    description: "Unfold your world with the ultimate foldable experience",
    colors: [
      "#000000", // Black
      "#6666FF", // Navy-like
      "#FFD700", // Gold
    ],
    isHovered: false,
  },
  {
    id: "4",
    name: "Galaxy Z Flip5",
    image: "assets/products/z-flip-5-1.png",
    hoverImage: "assets/products/z-flip-5-hover.png",
    price: 99999,
    description: "Take your best selfies, hands-down and hands-free",
    colors: [
      "#000000", // Black
      "#8B5CF6", // Purple-ish
      "#FFD700", // Gold
      "#06B6D4", // Cyan
    ],
    isHovered: false,
  },
];


   // Add hover functionality
  onProductHover(index: number, isHovered: boolean): void {
    this.mobileProducts[index].isHovered = isHovered
  }
  


}
