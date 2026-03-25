import { ShoppingBag, ShoppingCart, History, Ticket } from 'lucide-react';
import { APP_ROUTES } from '~/constants/routes';

export const navItems = [
  { to: APP_ROUTES.SHOPS, icon: ShoppingBag, label: 'Shop' },
  { to: APP_ROUTES.CART, icon: ShoppingCart, label: 'Cart' },
  { to: APP_ROUTES.HISTORY, icon: History, label: 'History' },
  { to: APP_ROUTES.COUPONS, icon: Ticket, label: 'Coupons' },
  { to: APP_ROUTES.PROFILE, icon: Ticket, label: 'Profile' },
];
