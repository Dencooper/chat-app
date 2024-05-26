import { useState } from "react"
import GenderCheckBox from "./GenderCheckBox"
import { Link } from 'react-router-dom'
import userSignup from "../../hook/userSignup"
const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const { loading, signup } = userSignup();

    const handleSubmitFormSignup = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> TunaApp</span>
                </h1>

                <form onSubmit={handleSubmitFormSignup} className="text-gray-200">
                    <div>
                        <label className='label p-2'>
                            <span className=''>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter full name'
                            className='w-full input input-bordered h-10 text-gray-600'
                            value={inputs.fullName}
                            onChange={(event) => { setInputs({ ...inputs, fullName: event.target.value }) }}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 text-gray-600'
                            value={inputs.username}
                            onChange={(event) => { setInputs({ ...inputs, username: event.target.value }) }}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base'>Passoword</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10 text-gray-600'
                            value={inputs.password}
                            onChange={(event) => { setInputs({ ...inputs, password: event.target.value }) }}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base'>Confirm Passoword</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter confirm password'
                            className='w-full input input-bordered h-10 text-gray-600'
                            value={inputs.confirmPassword}
                            onChange={(event) => { setInputs({ ...inputs, confirmPassword: event.target.value }) }}
                        />
                    </div>
                    <GenderCheckBox
                        inputs={inputs}
                        setInputs={setInputs} />

                    <Link to={"/login"} className='text-sm hover:underline hover:text-blue-500 text-gray-300 mt-2'>
                        Already have an account
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'
                            disabled={loading}>
                            {loading ? (
                                <span className="loading loading-spinner" />
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp