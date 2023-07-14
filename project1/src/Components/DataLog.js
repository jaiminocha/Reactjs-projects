import React from 'react'

const DataLog = ({ fieldData }) => {
  return (
    <div>
        <h3>Hello Ji!</h3>
        {
            fieldData?.map((item, index) => {
            return (
                <p key={index}>{item.name}</p>
            )
            })
        }
    </div>
  )
}

export default DataLog