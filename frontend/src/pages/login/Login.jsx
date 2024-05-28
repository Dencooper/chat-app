import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userLogin from '../../hook/userLogin';
const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })

    const { loading, login } = userLogin();

    const handleSubmitFormLogin = async (e) => {
        e.preventDefault();
        await login(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> TunaApp</span>
                </h1>

                <form onSubmit={handleSubmitFormLogin}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(event) => setInputs({ ...inputs, username: event.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text '>Passoword</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(event) => setInputs({ ...inputs, password: event.target.value })}
                        />
                    </div>
                    <Link to={"/signup"} className='text-sm hover:underline hover:text-gray-300'>
                        Don't have a account
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? (
                                <span className='loading loading-spinner' />
                            ) : (
                                "Login"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login