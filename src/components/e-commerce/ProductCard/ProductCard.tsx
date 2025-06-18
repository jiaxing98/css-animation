import clsx from 'clsx'
import styles from './styles.module.css'

interface Props {
  images: string[]
}

export const ProductCard = ({ images }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full aspect-[3/4] overflow-clip">
        <div className={'relative w-full h-full'}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className={clsx('absolute inset-0 w-full h-full object-cover', styles['image-fade-in'])}
            />
          ))}
        </div>
      </div>
      <p className="font-[Space_Mono] text-xs px-2">
        "Metal Bead" Crop Patch Pocket Jacket <br /> Cotton Canvas (Black) <br />
        <span className="flex flex-row flex-wrap gap-x-2">
          <span className="line-through text-gray-600">$1,695.00</span>
          $847.50 AUD
        </span>
      </p>
    </div>
  )
}
