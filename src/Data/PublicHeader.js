import {
  ChatAlt2Icon,
  CubeTransparentIcon,
  CubeIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { GiHairStrands } from 'react-icons/gi';
import { RiRestaurantFill, RiShoppingCart2Fill } from 'react-icons/ri';
import { FaRegHospital } from 'react-icons/fa';

export const solutions = [
  {
    name: 'Consulting',
    description: 'Find out what we can help your business to grow, and get an estimation of the plan.',
    href: '/solutions/consulting',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Brand Identity',
    description: 'Cultivating new ideas to connecting the dots for customers or users.',
    href: '/solutions/brand_identity',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Development',
    description: "From personal projects to eCommerce websites, we are manufacturing lines of codes to make things happen.",
    href: '/solutions/development',
    icon: CubeIcon,
  },
  {
    name: 'Digital Marketing',
    description: 'Make things better for reality. Advertising and marketing that pushes projects to success.',
    href: '/solutions/marketing',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Continuing Support',
    description: 'We provide education for our customers, as well as excellent maintenance of the digital products to reach 100% satisfaction.',
    href: '/solutions/support',
    icon: UserGroupIcon,
  },
];

export const packages = [
  {
    name: 'Restaurants and Cafes',
    description: 'Online orders, Online Payments, Reservations, all-in-one.',
    href: '/solutions/restaurants/intro',
    icon: RiRestaurantFill,
  },
  {
    name: 'Nail | Hair Salons',
    description: 'Online reservations, Designer reserve, Schedules.',
    href: '/solutions/nail&hair',
    icon: GiHairStrands,
  },
  {
    name: 'eCommerces',
    description: "Stock management, Order management, Payment gateway",
    href: '/solutions/eCommerces',
    icon: RiShoppingCart2Fill,
  },
  {
    name: 'Individual Practices',
    description: 'Email & SMS Schedules, Online Reservations, Patient Database',
    href: '/solutions/practices',
    icon: FaRegHospital,
  },
];