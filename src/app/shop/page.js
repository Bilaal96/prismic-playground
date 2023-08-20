/** Product listing
 * Client Routes
  - /shop OR /home
  - /shop/:category
  - /shop/:category/:productId
  - /about
  - /contact
  
 * Use tailwind to create:
  - Card component -> this would be a prismic slice
  - Grid layout -> would this be a slice / page type / custom type?
  - Horizontal scroller for product cards

 * /home OR /shop
 > Home Page (landing/shop page)
  - hero image (e.g. product offer)
  - product category buttons - navigate to /shop/:category
  - horizontal scrollers
    * product offers 
    * product category previews
  - other - marketing (e.g. offers newsletter) / news API
 
 * /shop/:category  
 > Products (by category) Page - Grid layout & card

 * /shop/:category/:productId  
 > Single Product

 * Use Prismic content writer to add / remove products from the DB
 */

import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import products from '@/products.json';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* <ProductCard {...products[0]} /> */}
      <ProductGrid products={products} />
    </main>
  );
}
