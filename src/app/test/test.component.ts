import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Review {
  name: string
  role: string
  avatar: string
  content: string
  device: string
  date: string
}
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  Math = Math;
 currentSlide = 0
  autoSlideInterval: any

  reviews: Review[] = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=48&width=48&text=PS",
      content: "The Galaxy S24 Ultra has completely transformed my productivity. The S Pen integration is seamless.",
      device: "Galaxy S24 Ultra",
      date: "2 months ago",
    },
    {
      name: "Rahul Gupta",
      role: "Digital Creator",
      avatar: "/placeholder.svg?height=48&width=48&text=RG",
      content: "As a content creator, the Galaxy Z Fold5 gives me the perfect balance of portability and screen space.",
      device: "Galaxy Z Fold5",
      date: "1 month ago",
    },
    {
      name: "Anita Patel",
      role: "Business Owner",
      avatar: "/placeholder.svg?height=48&width=48&text=AP",
      content: "The Galaxy Z Flip5 fits perfectly into my busy lifestyle. Compact design with powerful performance.",
      device: "Galaxy Z Flip5",
      date: "3 weeks ago",
    },
    {
      name: "Vikram Singh",
      role: "Photographer",
      avatar: "/placeholder.svg?height=48&width=48&text=VS",
      content: "The camera system on the Galaxy S24+ is incredible. Night mode has elevated my photography.",
      device: "Galaxy S24+",
      date: "6 weeks ago",
    },
    {
      name: "Meera Joshi",
      role: "Marketing Manager",
      avatar: "/placeholder.svg?height=48&width=48&text=MJ",
      content: "Galaxy Watch6 has become essential for my daily routine. Health tracking keeps me motivated.",
      device: "Galaxy Watch6",
      date: "4 months ago",
    },
    {
      name: "Arjun Reddy",
      role: "Student",
      avatar: "/placeholder.svg?height=48&width=48&text=AR",
      content: "The Galaxy Tab S9 is perfect for studies. Large screen and S Pen make note-taking efficient.",
      device: "Galaxy Tab S9",
      date: "2 months ago",
    },
    {
      name: "Kavya Nair",
      role: "Fitness Trainer",
      avatar: "/placeholder.svg?height=48&width=48&text=KN",
      content: "Galaxy Buds2 Pro provide amazing sound quality. Noise cancellation helps me stay focused.",
      device: "Galaxy Buds2 Pro",
      date: "5 weeks ago",
    },
    {
      name: "Rohit Kumar",
      role: "Entrepreneur",
      avatar: "/placeholder.svg?height=48&width=48&text=RK",
      content: "The Galaxy S24 series has everything I need. Performance, battery life, and camera are exceptional.",
      device: "Galaxy S24",
      date: "7 weeks ago",
    },
  ]

  // Calculate dots for pagination
  get dots(): number[] {
    return Array(Math.ceil(this.reviews.length / 4))
      .fill(0)
      .map((_, i) => i)
  }

  ngOnInit(): void {
    this.startAutoSlide()
  }

  ngOnDestroy(): void {
    this.stopAutoSlide()
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % (this.reviews.length - 3)
    }, 3000) // Slide every 3 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
    }
  }

}
