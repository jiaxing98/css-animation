import { createFileRoute } from '@tanstack/react-router'
import styles from './styles.module.css'

export const Route = createFileRoute('/sprite-animation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles['scroll-area']}>
      <div className={styles['sprite-container']}>
        <div
          className={styles['sprite']}
          style={{ '--url': "url('src/assets/images/sprite-animation/cute_apple_run.png'" } as React.CSSProperties}
        />
        <div
          className={styles['sprite']}
          style={{ '--url': "url('src/assets/images/sprite-animation/cute_lemon_run.png'" } as React.CSSProperties}
        />
        <div
          className={styles['sprite']}
          style={{ '--url': "url('src/assets/images/sprite-animation/cute_orange_run.png'" } as React.CSSProperties}
        />
        <div
          className={styles['sprite']}
          style={{ '--url': "url('src/assets/images/sprite-animation/cute_pear_run.png'" } as React.CSSProperties}
        />
        <div
          className={styles['sprite']}
          style={{ '--url': "url('src/assets/images/sprite-animation/cute_strawberry_run.png'" } as React.CSSProperties}
        />
        <div
          className={styles['sprite']}
          style={{ '--url': "url('src/assets/images/sprite-animation/cute_watermelon_run.png'" } as React.CSSProperties}
        />
      </div>
    </div>
  )
}
