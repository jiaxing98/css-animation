import { createFileRoute } from '@tanstack/react-router'
import type React from 'react'
import styles from './styles.module.css'

export const Route = createFileRoute('/play-pause-infinite-slider/')({
  component: RouteComponent,
})

function RouteComponent() {
  const logoQuantity = 10
  const imgQuantity = 9

  return (
    <div className="w-screen h-screen bg-[#e5e5e5]">
      <div className={styles['slider-container']}>
        <div
          className={styles['slider']}
          style={{ '--width': '100px', '--height': '50px', '--quantity': `${logoQuantity}` } as React.CSSProperties}
        >
          <div className={styles['list']}>
            {[...Array(logoQuantity)].map((_, index) => {
              return (
                <div
                  key={`logo-item-${index + 1}`}
                  className={styles['item']}
                  style={{ '--position': `${index + 1}` } as React.CSSProperties}
                >
                  <img src={`src/assets/images/play-pause-infinite-slider/slider1_${index + 1}.png`} alt="" />
                </div>
              )
            })}
          </div>
        </div>
        <div
          className={styles['slider']}
          data-reverse
          style={{ '--width': '200px', '--height': '200px', '--quantity': `${imgQuantity}` } as React.CSSProperties}
        >
          <div className={styles['list']}>
            {[...Array(imgQuantity)].map((_, index) => {
              return (
                <div
                  key={`img-item-${index + 1}`}
                  className={styles['item']}
                  style={{ '--position': `${index + 1}` } as React.CSSProperties}
                >
                  <img src={`src/assets/images/play-pause-infinite-slider/slider2_${index + 1}.png`} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
