"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductType {
  _id: string;
  name: string; // Required property
  title: string;
  category: string;
  price: number;
  expense: number;
  media: string[];
}

interface UserType {
  // Add relevant user properties here based on your application needs
}

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const fallbackImage = "/default-image.jpg"; // Replace with your actual fallback image path

  return (
    <Link href={`/products/${product._id}`} className="w-[220px] flex flex-col gap-2">
      <div className="relative">
        <Image
          src={product.media[0] || fallbackImage}
          alt={product.name}
          width={250}
          height={300}
          className="h-[250px] relative z-10 object-cover hover:opacity-0 transition-opacity ease duration-500"
        />
        <Image
          src={product.media[1] || fallbackImage}
          alt={product.name}
          width={220}
          height={300}
          className="h-[250px] object-cover absolute top-0 left-0"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.category}</p>
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">${product.expense}</p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
  );
};

export default ProductCard;
