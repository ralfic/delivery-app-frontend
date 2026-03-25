export const mockCartItems = [
  {
    id: 1,
    name: 'Big Big Burger',
    price: 12.99,
    quantity: 2,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Cheese Burger',
    price: 9.99,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'BBQ Burger',
    price: 11.99,
    quantity: 3,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&h=100&fit=crop',
  },
];

export const mockCoupons = [
  {
    id: 1,
    name: 'Summer Sale',
    code: 'SUMMER20',
    discount: '20% Off',
    description: 'Get 20% off on all orders above $25',
    color: 'from-orange-400 to-pink-500',
  },
  {
    id: 2,
    name: 'First Order',
    code: 'WELCOME10',
    discount: '$10 Off',
    description: 'Get $10 off on your first order',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    name: 'Free Delivery',
    code: 'FREEDEL',
    discount: 'Free Delivery',
    description: 'Free delivery on orders above $15',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 4,
    name: 'Weekend Special',
    code: 'WEEKEND15',
    discount: '15% Off',
    description: 'Valid on weekends only',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 5,
    name: 'Burger Combo',
    code: 'BURGER25',
    discount: '25% Off',
    description: 'Get 25% off on burger combos',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 6,
    name: 'Loyalty Reward',
    code: 'LOYAL30',
    discount: '30% Off',
    description: 'Exclusive for loyal customers',
    color: 'from-red-400 to-rose-500',
  },
];

export const mockOrders = [
  {
    id: 'ORD-001',
    date: '2026-03-20',
    items: [
      {
        name: 'Big Big Burger',
        image:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop',
      },
      {
        name: 'Cheese Burger',
        image:
          'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=80&h=80&fit=crop',
      },
    ],
    total: 35.97,
    status: 'Delivered',
  },
  {
    id: 'ORD-002',
    date: '2026-03-18',
    items: [
      {
        name: 'BBQ Burger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?w=80&h=80&fit=crop',
      },
      {
        name: 'Veggie Burger',
        image:
          'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=80&h=80&fit=crop',
      },
      {
        name: 'Chicken Burger',
        image:
          'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=80&h=80&fit=crop',
      },
    ],
    total: 42.96,
    status: 'Delivered',
  },
  {
    id: 'ORD-003',
    date: '2026-03-15',
    items: [
      {
        name: 'Double Burger',
        image:
          'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=80&h=80&fit=crop',
      },
    ],
    total: 17.98,
    status: 'Delivered',
  },
];

export const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  ordersCount: 5,
  id: 1,
  role: 'customer',
  balance: 1000,
  totalSpent: 500,
};

export const mockShops = [
  { id: 1, name: 'Mc Donny', active: true },
  { id: 2, name: 'CFK', active: false },
  { id: 3, name: 'Pizza Palace', active: false },
  { id: 4, name: 'Sushi Bar', active: false },
  { id: 5, name: 'Burger King', active: false },
];

export const mockProducts = [
  {
    id: 1,
    name: 'Big Big Burger',
    price: 12.99,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.5,
    description: 'Delicious Big Big Burger',
  },
  {
    id: 2,
    name: 'Cheese Burger',
    price: 9.99,
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    rating: 4.8,
    description: 'Tasty Cheese Burger',
  },
  {
    id: 3,
    name: 'Chicken Burger',
    price: 10.99,
    image:
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop',
    rating: 4.3,
    description: 'Juicy Chicken Burger',
  },
  {
    id: 4,
    name: 'Veggie Burger',
    price: 8.99,
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop',
    rating: 4.6,
    description: 'Healthy Veggie Burger',
  },
  {
    id: 5,
    name: 'Double Burger',
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop',
    rating: 4.7,
    description: 'Double Delight Burger',
  },
  {
    id: 6,
    name: 'BBQ Burger',
    price: 11.99,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    rating: 4.4,
    description: 'BBQ Delight Burger',
  },
];
