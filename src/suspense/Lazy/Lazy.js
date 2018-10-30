import React, {useState, Suspense} from 'react'

const Tilt = React.lazy(() => import('./Tilt.lazy'))

function useToggle(init = false) {
  const [on, setOn] = useState(init)
  const toggle = () => setOn(!on)
  return [on, toggle]
}

function Lazy() {
  const [showTilt, toggleTilt] = useToggle()
  return (
    <div>
      <label>
        show tilt
        <input type="checkbox" checked={showTilt} onChange={toggleTilt} />
      </label>

      <div>
        {showTilt ? (
          <Suspense fallback={<div>loading...</div>}>
            <Tilt>
              <div>Tilt Me</div>
            </Tilt>
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default Lazy