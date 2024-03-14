import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userSignup } from '../../ExternalComponents/api/user';
import { errorToast, successToast } from '../../ExternalComponents/Toast/Toast';

function UserSignUp() {

    const [ formField, setFormField ] = useState({});
    const navigate = useNavigate();


    const formdatas = [
        {
            type: "text",
            placeholder: "First Name",
            className:'',
            name: "userFname"
        },
        {
            type: "text",
            placeholder: "Last Name",
            className:'',
            name: "userLname"
        },
        {
            type: "email",
            placeholder: "Enter Your Email",
            className:'',
            name: "userEmail"
        },
        {
            type: "password",
            placeholder: "Enter Your Password",
            className:'',
            name: "userPassword"
        }
    ]


    const onChangeValues = (e) => {
        console.log(e.target.value);
        setFormField({ ...formField, [e.target.name]: e.target.value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await userSignup(formField)
            successToast(response.data.message);

            navigate('/user-signin')
        } catch (error){
            errorToast(error.response.data.message, 'error')
        }
    }


  return (
    <>
    <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} action="" className='w-[400px] h-[480px] border border-pink-800 rounded-3xl shadow-lg shadow-zinc-600 flex flex-col justify-center'>
            
            <h1 className='text-pink-800 text-lg sm:text-2xl m-5'>SIGN UP</h1>
            {
                formdatas.map(({placeholder, type,className, name }, index) => {
                    return(
                        <>
                        <div className="flex justify-center">
                            <input
                            onChange={onChangeValues}
                            key={index}
                            type={type} 
                            name={name} 
                            placeholder={placeholder}
                            className={`${className}  sm:w-[60%] sm:h-[40px] bg-white text-pink-900 flex justify-start ps-5 border border-pink-800 focus:border-pink-800 focus:outline-none focus:ring focus:ring-pink-200 rounded-md items-center m-3`}
                            />
                            </div>
                        </>
                    )
                })
            }

                <input type='submit' className='bg-pink-800 text-white text-xs sm:text-base sm:w-[350px] p-2 m-5 hover:bg-slate-500'/>

            
            <div className="flex gap-2 ml-5">
                <p className='font-semibold text-xs sm:text-base'>Have an account?</p>
                <Link to={'/user-signin'}>
                    <button className='text-blue-700 text-xs sm:text-base'>Sign in</button>
                </Link>
            </div>

        </form>
    </div>
    </>
  )
}

export default UserSignUp
