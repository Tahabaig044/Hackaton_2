"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
// console.log(HeartFavorite.length)
interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  // console.log(product)
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] relative z-10 object-cover hover:opacity-0 transition-opacity easy duration-500"
      />
      <Image
        src={product.media[1]}
        alt="product"
        width={220}
        height={300}
        className="h-[250px]  object-cover absolute"
      />
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

