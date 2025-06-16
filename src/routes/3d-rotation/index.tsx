import { createFileRoute } from '@tanstack/react-router'
import type React from 'react'
import styles from './styles.module.css'

export const Route = createFileRoute('/3d-rotation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={styles['banner-container']}>
      <div className={styles['banner-header']}>
        <div>
          <h1>CSS ONLY</h1>
          <img src="src/assets/images/3d-rotation/image_2.png" alt="" />
        </div>
        <div className={styles['author']}>
          <h3>LUN DEV</h3>
          <div>
            <p>Design By</p>
            <p>Lun Dev</p>
          </div>
          <div>
            <p>Code By</p>
            <p>Lun Dev</p>
          </div>
          <img src="src/assets/images/3d-rotation/code.png" alt="" />
        </div>
      </div>
      <div className={styles['banner']}>
        <div className={styles['product']}>
          <div
            className={styles['soda']}
            style={{ '--url': 'url("src/assets/images/3d-rotation/soda_image_1.png")' } as React.CSSProperties}
          />
          <div
            className={styles['soda']}
            style={{ '--url': 'url("src/assets/images/3d-rotation/soda_image_2.png")' } as React.CSSProperties}
          />
        </div>
        <div className={styles['rock']}>
          <img src="src/assets/images/3d-rotation/rock_1.png" alt="" />
          <img src="src/assets/images/3d-rotation/rock_2.png" alt="" />
          <img src="src/assets/images/3d-rotation/rock_3.png" alt="" />
        </div>
      </div>
    </div>
  )
}
