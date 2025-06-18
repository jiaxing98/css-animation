import { ProductCard } from '@/components/e-commerce/ProductCard/ProductCard'
import { createFileRoute } from '@tanstack/react-router'
import './styles.module.css'

export const Route = createFileRoute('/e-commerce/')({
  component: RouteComponent,
})

function RouteComponent() {
  const length = 20

  const images = [
    'https://cdn.shopify.com/s/files/1/0313/7117/files/240813_SFTM_25.1_Ecomm_Mens_251_MJK102B_CNVSBLK_0376_750x1124_crop_center.jpg.webp?v=1737595905',
    'https://cdn.shopify.com/s/files/1/0313/7117/files/240813_SFTM_25.1_Ecomm_Mens_251_MJK102B_CNVSBLK_0378_1920x2876_crop_center.jpg.webp?v=1737595905',
    'https://cdn.shopify.com/s/files/1/0313/7117/files/240813_SFTM_25.1_Ecomm_Mens_251_MJK102B_CNVSBLK_0370_1920x2876_crop_center.jpg.webp?v=1737595905',
    'https://cdn.shopify.com/s/files/1/0313/7117/files/240813_SFTM_25.1_Ecomm_Mens_251_MJK102B_CNVSBLK_0373_1920x2876_crop_center.jpg.webp?v=1737595905',
    'https://cdn.shopify.com/s/files/1/0313/7117/files/240813_SFTM_25.1_Ecomm_Mens_251_MJK102B_CNVSBLK_0374_1920x2876_crop_center.jpg.webp?v=1737595905',
    'https://cdn.shopify.com/s/files/1/0313/7117/files/240813_SFTM_25.1_Ecomm_Mens_251_MJK102B_CNVSBLK_0375_1920x2876_crop_center.jpg.webp?v=1737595905',
  ]
    .slice()
    .reverse()

  return (
    <div className="w-screen mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full justify-center items-center p-4 gap-4.5 bg-slate-400 text-wrap ">
        {Array.from({ length }).map((_, index) => (
          <ProductCard key={index} images={images} />
        ))}
      </div>
    </div>
  )
}
