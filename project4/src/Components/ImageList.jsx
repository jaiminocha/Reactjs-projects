import React from 'react'
import ImageShow from './ImageShow';

const ImageList = ({data}) => {
  return (
    <div className="box">
        {
        data?.map((item, index) => {
          return (
            <div className="shadow" key={index}>
              <ImageShow url={item} />
            </div>
          );
        })
      }
    </div>
  )
}

export default ImageList