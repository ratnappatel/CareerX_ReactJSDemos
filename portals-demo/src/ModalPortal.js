import React, { useState } from 'react';
import { ReactDOM } from 'react';


function ModalContainer({setOpen, data, setData}) {
    const[localData, setLocalData]=useState(data);
    const[count]=localData;
    function close(){setOpen(false)}
    function submit(){setData({count}); close();}


    const content=new Array(1).fill(
        <p>
            Edit the counts by clicking/typing
        </p>
    );
  return ReactDOM.createPortal(
    <>
    <div onClick={close}/>
    <div>
        <h4>Edit Count</h4>
        {content}
        <label>Counts</label>
        <input type="number" onChange={e=>setLocalData({count:e.target.value})}/>
        <button onClick={submit}>Submit</button>
    </div>
    </>,
    document.body
  )
}


export default function ModalPortal(props) {
    const[open, setOpen]=useState(false);
    const[data, setData]=useState({count:0});
  return (
    <div>
        <div>
            Count : {data.count} </div>
            <button onClick={setOpen(true)}>Open/Close Modal</button>
            {open &&(<ModalContainer {...props}
            setOpen={setOpen}
            data={data}
            setData={setData}
            />)}
    </div>
  )
}



 