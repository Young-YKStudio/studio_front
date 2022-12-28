import {
  ShieldCheckIcon,
} from '@heroicons/react/outline';
import { BiCodeBlock, BiSpreadsheet, BiStoreAlt, BiConversation, BiCog } from 'react-icons/bi'; 

export const features = [
  {
    name: 'Website hosting, Design',
    description: 'Our design team builds a mobile-friendly website that is easy to manage, establishes your brand, and boosts your SEO.',
    icon: BiCodeBlock,
  },
  {
    name: 'Dynamic Menu',
    description: 'No more having customers to download PDF menu. Our package includes embedded menu on website for easier access and more SEO result. Also updating menu or feature an item in matter of seconds. ',
    icon: BiSpreadsheet,
  },
  {
    name: 'Direct Ordering & Delivery',
    description: 'Online ordering and delivery is included with every restaurant package. We include order management page for admin, which is easy to control orders.',
    icon: BiStoreAlt,
  },
  {
    name: 'Advanced Security',
    description: 'The Package comes with SSL Certification, and the data is secured with MongoDB.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Marketing Automation',
    description: 'Send emails and text messages, publish to social media, create QR codes - all in one platform.',
    icon: BiConversation,
  },
  {
    name: 'Admin Integration',
    description: 'No backend access needed. Our website comes with integrated management screen for you and your employees.',
    icon: BiCog,
  },
]