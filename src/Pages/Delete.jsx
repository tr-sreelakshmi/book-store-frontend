import React, { useState } from 'react'
import Backbutton from '../Component/Backbutton'
import Spinner from '../Component/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function Delete() {
  const [loading, setLoading] = useState(false)
  const navigate= useNavigate();
  const {id} = useParams();

  const handleDeletebook=()=>{
    setLoading(true);
    axios.delete(`https://book-store-backend-22a4.onrender.com/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      alert ('Please check  console');
      console.log(error);
    })
  }

   return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto' >
 <h3 className='text-2xl'> Are You Sure You Want To Delete this book ?</h3>
    
    <button className='p-4  bg-red-600 text-white m-8 w-full' onClick={handleDeletebook}> Yes, Delete</button>
      </div>
      </div>
  )
}

export default Delete