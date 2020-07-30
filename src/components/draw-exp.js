import React from "react"

const DrawExperience = ({ exp }) => {
  const { company, date, rol, description, technologies } = exp
  return (
    <>
      <div className="container">
        <h4>
          {company} ( {date} )
        </h4>
        <span className="title">{rol}</span>

        {description}
        <p>Technologies:</p>
        {technologies}
      </div>
    </>
  )
}

export default DrawExperience
