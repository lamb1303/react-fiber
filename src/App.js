import React, { useEffect, useRef, Suspense } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import state from './containers/store/store'
import Content from './containers/content/Content'

const App = () => {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas concurrent pixelRatio={1} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <Content
            title="Russapp"
            slogan="Welcome!"
          />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
        ))}
      </div>
    </>

  );
}

export default App;
