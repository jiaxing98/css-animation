import { createFileRoute } from '@tanstack/react-router'
import styles from './styles.module.css'

export const Route = createFileRoute('/ink/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles['banner']}>
      <div className={styles['content']}>
        <h1>LUNDEV</h1>
        <p>Subscribe to see more</p>
      </div>
    </div>
  )
}
