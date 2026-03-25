import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';
import { APP_ROUTES } from './constants/routes';

export default [
  layout('routes/main-layout.tsx', [
    index('routes/shops.tsx'),
    route(APP_ROUTES.CART, 'routes/cart.tsx'),
    route(APP_ROUTES.HISTORY, 'routes/history.tsx'),
    route(APP_ROUTES.COUPONS, 'routes/coupons.tsx'),
    route(APP_ROUTES.PROFILE, 'routes/profile.tsx'),
  ]),
  route(APP_ROUTES.SIGNUP, 'routes/signup.tsx'),
  route(APP_ROUTES.LOGIN, 'routes/login.tsx'),
] satisfies RouteConfig;
