import { createFileRoute } from '@tanstack/react-router'
import styles from './styles.module.css'

export const Route = createFileRoute('/3d-slider/')({
  component: RouteComponent,
})

function RouteComponent() {
  const quantity = 10

  return (
    <div className={styles['banner-container']}>
      <div className={styles['banner']}>
        <div className={styles['slider']} style={{ '--quantity': `${quantity}` } as React.CSSProperties}>
          {[...Array(quantity)].map((_, index) => {
            return (
              <div
                key={`item-${index + 1}`}
                className={styles['item']}
                style={{ '--position': `${index + 1}` } as React.CSSProperties}
              >
                <img src={`src/assets/images/3d-slider/dragon_${index + 1}.jpg`} alt="" />
              </div>
            )
          })}
        </div>
        <div className={styles['content']}>
          <h1 data-content="CSS ONLY">CSS ONLY</h1>
          <div className={styles['author']}>
            <h2>LUN DEV</h2>
            <p>
              <b>Web Design</b>
            </p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className={styles['model']}></div>
        </div>
      </div>
    </div>
  )
}
