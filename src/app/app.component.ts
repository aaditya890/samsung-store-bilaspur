import { RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core"
import { CommonModule } from "@angular/common"
interface NavItem {
  label: string
  href: string
}

interface Product {
  id: string
  name: string
  image: string
  price?: number
}

interface Story {
  id: string
  title: string
  excerpt: string
  image: string
}

interface FooterSection {
  title: string
  links: { label: string; href: string }[]
}

interface SocialLink {
  href: string
  icon: string
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
  src: string | null = null
  navItems: NavItem[] = [
    { label: "Shop", href: "/shop" },
    { label: "Mobile", href: "/mobile" },
    { label: "TV & AV", href: "/tv-av" },
    { label: "Appliances", href: "/appliances" },
    { label: "Computing & Display", href: "/computing" },
    { label: "Support", href: "/support" },
  ]


   ngAfterViewInit(): void {
    setTimeout(() => {
      this.src = 'assets/bg.mp4';
    }
  )};
  mobileProducts: Product[] = [
    {
      id: "1",
      name: "Galaxy S24 Ultra",
      image: "/placeholder.svg?height=160&width=120",
    },
    {
      id: "2",
      name: "Galaxy S24 Edge",
      image: "/placeholder.svg?height=160&width=120",
    },
    {
      id: "3",
      name: "Galaxy Tab S10 Ultra",
      image: "/placeholder.svg?height=160&width=120",
    },
    {
      id: "4",
      name: "New Galaxy Buds",
      image: "/placeholder.svg?height=160&width=120",
    },
  ]

  tvProducts: Product[] = [
    {
      id: "1",
      name: "Neo QLED 8K",
      image: "/placeholder.svg?height=160&width=200",
    },
    {
      id: "2",
      name: "The Frame",
      image: "/placeholder.svg?height=160&width=200",
    },
    {
      id: "3",
      name: "Q-Series Soundbar",
      image: "/placeholder.svg?height=160&width=200",
    },
    {
      id: "4",
      name: "Odyssey OLED G8",
      image: "/placeholder.svg?height=160&width=200",
    },
  ]

  applianceProducts: Product[] = [
    {
      id: "1",
      name: "Bespoke AI Refrigerator",
      image: "/placeholder.svg?height=160&width=120",
    },
    {
      id: "2",
      name: "Bespoke AI Laundry",
      image: "/placeholder.svg?height=160&width=120",
    },
    {
      id: "3",
      name: "Bespoke AI WindFree",
      image: "/placeholder.svg?height=160&width=120",
    },
    {
      id: "4",
      name: "Microwave Ovens",
      image: "/placeholder.svg?height=160&width=120",
    },
  ]

  highlightProducts: Product[] = [
    {
      id: "1",
      name: "Galaxy Ring",
      price: 38999,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "2",
      name: "Galaxy Tab A9+ 5G 8B Memory",
      price: 19999,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "3",
      name: "Galaxy S24",
      price: 74999,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "4",
      name: "23.5 L Convertible Freezer Double Door Refrigerator",
      price: 25999,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "5",
      name: "8.5 Kg EcoBubble™ Top Load Washing Machine",
      price: 19999,
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  stories: Story[] = [
    {
      id: "1",
      title: "Explore how our AI ecosystem works",
      excerpt: "Discover the power of Galaxy AI across all your devices",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Get smart gameplays with the new Galaxy S24",
      excerpt: "Experience next-level gaming performance",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "Discover how Gen-Z Things will change your life",
      excerpt: "The future of technology is here",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "4",
      title: "Steps towards a better future",
      excerpt: "Samsung's commitment to sustainability",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  footerSections: FooterSection[] = [
    {
      title: "Product & Service",
      links: [
        { label: "Smartphones", href: "/smartphones" },
        { label: "Tablets", href: "/tablets" },
        { label: "Watches", href: "/watches" },
        { label: "Buds", href: "/buds" },
        { label: "TVs", href: "/tvs" },
        { label: "Audio & Video", href: "/audio-video" },
        { label: "Refrigerators", href: "/refrigerators" },
        { label: "Washing Machines", href: "/washing-machines" },
      ],
    },
    {
      title: "Shop",
      links: [
        { label: "Special Stores", href: "/special-stores" },
        { label: "Online Shop", href: "/online-shop" },
        { label: "Offers", href: "/offers" },
        { label: "Samsung Care+", href: "/samsung-care" },
        { label: "Samsung Upgrade", href: "/samsung-upgrade" },
        { label: "Galaxy Club", href: "/galaxy-club" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Support Home", href: "/support" },
        { label: "Product Help", href: "/product-help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Service Centers", href: "/service-centers" },
        { label: "Warranty", href: "/warranty" },
        { label: "Memory Upgrade", href: "/memory-upgrade" },
      ],
    },
    {
      title: "Account & Community",
      links: [
        { label: "Samsung Account", href: "/account" },
        { label: "Community", href: "/community" },
        { label: "Samsung Members", href: "/members" },
        { label: "Samsung Pay", href: "/samsung-pay" },
        { label: "Samsung Health", href: "/samsung-health" },
      ],
    },
    {
      title: "Sustainability",
      links: [
        { label: "Environment", href: "/environment" },
        { label: "Security & Privacy", href: "/security-privacy" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Diversity & Inclusion", href: "/diversity-inclusion" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Company Info", href: "/company-info" },
        { label: "Business", href: "/business" },
        { label: "Brand Identity", href: "/brand-identity" },
        { label: "Careers", href: "/careers" },
        { label: "Investor Relations", href: "/investor-relations" },
        { label: "News", href: "/news" },
        { label: "Ethics", href: "/ethics" },
      ],
    },
  ]

  socialLinks: SocialLink[] = [
    {
      href: "https://facebook.com/samsung",
      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    },
    {
      href: "https://twitter.com/samsung",
      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    },
    {
      href: "https://instagram.com/samsung",
      icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.42-3.321c.873-.807 2.024-1.297 3.321-1.297s2.448.49 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.83-9.476c-.49 0-.873-.383-.873-.873s.383-.873.873-.873.873.383.873.873-.383.873-.873.873zm0 0",
    },
    {
      href: "https://youtube.com/samsung",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
  ]

}
