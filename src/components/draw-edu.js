import React from "react"

const DrawEdu = ({ edu_item }) => {
  const { school, date, description } = edu_item
  return (
    <>
      <div className="container">
        <h4>
          {school} ( {date} )
        </h4>

        {description}
      </div>
    </>
  )
}

export default DrawEdu
