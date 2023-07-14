import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({item, index, deleteData}) => {
    
  return (
    <div className="fieldSet">
        <div key={index} className="row-header">
        <p>{item.name}</p>
        <p>{item.email}</p>
        <button onClick={()=>deleteData(index)}>
            <DeleteIcon />
        </button>
        </div>
    </div>
  )
}

export default Fields