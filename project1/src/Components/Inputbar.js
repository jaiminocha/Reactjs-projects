import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fields from './Fields';

const Inputbar = (props) => {
  const [record, setRecord] = useState([]);
  const[email,setEmail]=useState('')
  const[name,setName]=useState('')
  const addItem = (currName,currEmail) => {
   
    if (currName !== "" && currEmail !== "") {
    
      const data = {
        name: currName,
        email: currEmail
      }
      // console.log(data);
      // document.getElementById('namefield').value = "";
      // document.getElementById('emailfield').value = "";
      setRecord([data, ...record])
      // The updated record won't show as the state is not handled immidiately. We scan render it on
      // different components or even this page though.
      // console.log(record);
      // props.getFieldData(record); 
      setName('');
      setEmail('');
    }
    else {
      alert("Please fill all the fields!");
    }
  }

  const deleteData = (index) => {
    let arr = record;
    arr.splice(index, 1);
    setRecord([...arr]);
  }

  useEffect(() => {
    props.setFieldData(record);
  }, [props, record])

  return (
    <div>
        <div className="heading">
          <h1>Email tracker</h1>
        </div>
        <span>Name: </span>
        <input id='namefield' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <span>Email: </span>
        <input id='emailfield' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button onClick={()=>addItem(name,email)} className='btnstyle'>  
          <AddCircleIcon />
        </button>
        <div className="row-header">
          <p className='rh'>Name</p>
          <p className='rh'>Email</p>
          <p className='rh'>Delete</p>
        </div>
        {
          record?.map((item, index)=> {
            return(
              <Fields key={index} item={item} index={index} deleteData={deleteData} />
            )
          })
        }
    </div>
  )
}

export default Inputbar;