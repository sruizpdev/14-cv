import React from "react"

const DrawExperience = ({ exp }) => {
  const { company, date, rol, description, technologies } = exp
  return (
    <>
      <div className="container">
        <h4>
          {company} ( {date} )
        </h4>
        <h3>{rol}</h3>

        {description}
        <p>Technologies:</p>
        {technologies}
      </div>
    </>
  )
}

export default DrawExperience
