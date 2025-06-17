import { createFileRoute } from '@tanstack/react-router'
import styles from './styles.module.css'

export const Route = createFileRoute('/list-transform/')({
  component: RouteComponent,
})

function RouteComponent() {
  const quantity = 6

  return (
    <div className={styles['banner-container']}>
      <div className={styles['list']}>
        {[...Array(quantity)].map((_, index) => {
          return (
            <div key={`item-${index + 1}`} className={styles['item']}>
              <img src={`src/assets/images/3d-slider/dragon_${index + 1}.jpg`} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
