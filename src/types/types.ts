export type Assets = {
  logo: string;
  hero_img: string;
  cart_icon: string;
  dropdown_icon: string;
  exchange_icon: string;
  profile_icon: string;
  quality_icon: string;
  search_icon: string;
  star_dull_icon: string;
  star_icon: string;
  bin_icon: string;
  support_img: string;
  menu_icon: string;
  about_img: string;
  contact_img: string;
  razorpay_logo: string;
  stripe_logo: string;
  cross_icon: string;
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes?: string[];
  date: number;
  bestseller: boolean;
};
