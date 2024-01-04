import { GridTileImage } from 'components/grid/tile';
import SectionHeading from 'components/section-heading';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-1 md:row-span-1'}
    >
      <Link className="relative block aspect-[4/5] h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl space-y-6 bg-white px-4 py-16 pb-4 text-center text-gray-800 lg:py-32">
      <div className="space-y-6">
        <SectionHeading>Shop Our Scents</SectionHeading>
        <Link href="/" className="text-primary inline-block font-light uppercase">
          See all products
        </Link>
      </div>
      <div className=" grid  gap-6 md:grid-cols-4 md:grid-rows-2">
        <ThreeItemGridItem size="half" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
      </div>
    </section>
  );
}
