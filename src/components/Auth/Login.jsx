import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("emial is",email)
        console.log("password is:",password)
        setemail('')
        setpassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center py-10 px-10  '>
        <div className='border-2 border-emerald-300 rounded-2xl'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} action="" className='flex flex-col items-center py-30 px-10 justify-center gap-6 '>
                <input
                 value={email}
                 onChange={(e)=>{
                    setemail(e.target.value)
                }}
                 type="email" className='border-2 px-4 py-2 outline-none border-emerald-600 rounded-full gap-10 ' placeholder='Enter Your email'/>
                <input
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                 className='rounded-full px-4 py-2 outline-none border-emerald-600 border-2' type="password" placeholder='Enter password' />
                <button className='border-2 border-black rounded-full bg-emerald-300 px-20 py-2 '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login