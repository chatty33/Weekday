import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <img
          className="weekday-icon"
          src="/weekday.png"
          alt="weekday icon"
          width={50}
          height={50}
        />
        <h1 className="title"> Weekday </h1>
      </div>
  )
}

export default Header
