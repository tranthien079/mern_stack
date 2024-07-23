import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: '/order',
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: '/products',
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: '/product-details',
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: '/type',
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: '*',
    page: NotFoundPage,
  }
];
