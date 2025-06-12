import { createFileRoute } from '@tanstack/react-router'
import './style.css'

export const Route = createFileRoute('/3d-slider/')({
  component: RouteComponent,
})

function RouteComponent() {
  const quantity = 10

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="slider" style={{ '--quantity': `${quantity}` } as React.CSSProperties}>
          {[...Array(quantity)].map((_, index) => {
            return (
              <div
                key={`item-${index + 1}`}
                className="item"
                style={{ '--position': `${index + 1}` } as React.CSSProperties}
              >
                <img src={`src/assets/images/3d-slider/dragon_${index + 1}.jpg`} alt="" />
              </div>
            )
          })}
        </div>
        <div className="content">
          <h1 data-content="CSS ONLY">CSS ONLY</h1>
          <div className="author">
            <h2>LUN DEV</h2>
            <p>
              <b>Web Design</b>
            </p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  )
}
