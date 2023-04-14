import React from "react"
import "./index.css"

const Loader = ({ className, relative = false }) => {
  return (
    <div className={`loader ${relative ? "absolute" : "fixed"} ${className}`}>
      <div className="gooey">
        <span className="dot" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

export default Loader
