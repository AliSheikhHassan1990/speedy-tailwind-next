
export interface NavItem {
  title: string;
  items?: { title: string; href: string; description?: string }[];
  href?: string;
}

export const navigationItems: NavItem[] = [
  {
    title: "Products",
    items: [
      {
        title: "FreeFlyer Astrodynamics Software",
        href: "/products/freeflyer",
        description: "Advanced astrodynamics software for mission planning and analysis"
      },
      {
        title: "Meridian Flight Dynamics Ground Systems",
        href: "/products/meridian",
        description: "Complete ground system solutions for spacecraft operations"
      }
    ]
  },
  {
    title: "Explore",
    items: [
      {
        title: "Mission Solutions",
        href: "/explore/mission-solutions",
        description: "Comprehensive mission design and analysis solutions"
      },
      {
        title: "Training & Support",
        href: "/explore/training",
        description: "Expert training and technical support services"
      }
    ]
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Professional Services",
        href: "/solutions/services",
        description: "Custom engineering and development solutions"
      },
      {
        title: "Consulting",
        href: "/solutions/consulting",
        description: "Expert guidance for your space mission needs"
      }
    ]
  },
  {
    title: "Company & Careers",
    items: [
      {
        title: "About Us",
        href: "/company/about",
        description: "Learn about our mission and values"
      },
      {
        title: "Careers",
        href: "/company/careers",
        description: "Join our team of space technology experts"
      }
    ]
  },
  {
    title: "Resources",
    items: [
      {
        title: "Documentation",
        href: "/resources/docs",
        description: "Technical documentation and user guides"
      },
      {
        title: "Blog",
        href: "/resources/blog",
        description: "Industry insights and company updates"
      }
    ]
  }
];
