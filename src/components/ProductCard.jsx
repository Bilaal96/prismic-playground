'use client';

/**
 * imageSrc
 * name
 * description
 * category
 * cost
 * quantity
 *? TBD stock -> use to check availability - if not available notify user in UI
 */

import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({
  imageSrc,
  name,
  description,
  category,
  cost,
  stock,
}) {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => setQuantity(quantity - 1);
  const increaseQuantity = () => setQuantity(quantity + 1);

  return (
    <div className="w-96 border rounded border-slate-400">
      <div className="relative w-full h-56 overflow-hidden">
        {/* Category */}
        <div className="absolute top-2 right-2 z-10 bg-slate-950 text-white px-4 py-2 rounded-full">
          {category}
        </div>

        <Image
          className="object-cover"
          src={`/images${imageSrc}`}
          fill
          alt={name}
        />
      </div>

      {/* Content */}
      <div className="p-4 border-b border-slate-400 ">
        <h3 className="font-bold text-2xl mb-2 text-slate-900">{name}</h3>
        <p className="">{description}</p>
      </div>

      {/* Footer */}
      <div className="p-4 flex justify-between items-center">
        {/* Group: Quantity & Buy */}
        <div className="flex flex-col gap-4">
          {/* Quantity */}
          <div className="rounded flex min-w-max rounded-s-full max-h-min">
            <span>
              <button
                onClick={decreaseQuantity}
                className="bg-slate-600 text-slate-100 px-2 rounded-l-lg h-full hover:bg-slate-500 disabled:bg-slate-300"
                disabled={quantity === 0}
              >
                -
              </button>
            </span>
            <span className="grow max-h-min font-semibold border border-slate-300 text-center">
              {quantity}
            </span>
            <span>
              <button
                onClick={increaseQuantity}
                className="bg-slate-600 text-slate-100 px-2 rounded-r-lg h-full hover:bg-slate-500"
              >
                +
              </button>
            </span>
          </div>

          {/* Buy */}
          <button className="bg-sky-800 text-slate-100 px-8 py-2 rounded font-bold uppercase hover:bg-sky-700">
            Buy
          </button>
        </div>

        {/* Price */}
        <p className="self-end font-bold text-2xl">
          <span className="text-sky-700">£</span>
          {cost}
        </p>
      </div>
    </div>
  );
}
