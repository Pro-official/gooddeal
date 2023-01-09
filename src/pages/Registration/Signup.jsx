import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import useAuth from "../../Hooks/useAuth";
import loginPhoto from "../../images/log.jpg";
import { FcGoogle } from "react-icons/fc";
import Navigation from "../../components/Navigation";

const Signup = () => {
	const [loginData, setLoginData] = useState({});

	const history = useHistory();
	// const navigate = useNavigate();
	const { user, registerUser, signInWithGoogle, isLoading } = useAuth();
	// console.log(user);

	if (user.email) {
		history.push("/home");
	}

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		if (loginData?.password !== loginData?.password2) {
			alert("Your password did not match");
			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
		e.preventDefault();
	};
	const handleGoogleLogin = () => {
		signInWithGoogle();
	};

	return (
		<>
			<Navigation />
			<div className='flex md:max-w-7xl mx-auto flex-wrap mt-4 w-full'>
				<div className='flex flex-col w-full md:w-1/2'>
					<div className='flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
						<p className='text-3xl font-bold font-header text-left'>
							Register.
						</p>
						<BeatLoader loading={isLoading} size={30} />
						{user?.email && (
							<p
								style={{ color: "#b22121" }}
								className='fw-bold text-left text-xl'
							>
								Login Successful!!
							</p>
						)}
						<hr className='mt-1 ' />
						<form
							onSubmit={handleLoginSubmit}
							className='flex flex-col pt-3 md:pt-8'
						>
							<div className='flex flex-col pt-4'>
								<div className='flex mb-5'>
									<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
										<svg
											width='15'
											height='15'
											fill='currentColor'
											viewBox='0 0 1792 1792'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
										</svg>
									</span>
									<input
										type='text'
										id='design-login-email'
										className=' flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Name'
										name='name'
										required
										onChange={handleOnBlur}
									/>
								</div>
								<div className='flex'>
									<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
										<svg
											width='15'
											height='15'
											fill='currentColor'
											viewBox='0 0 1792 1792'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
										</svg>
									</span>
									<input
										type='email'
										id='design-login-email'
										className=' flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Email'
										name='email'
										onChange={handleOnBlur}
									/>
								</div>
							</div>
							<div className='flex flex-col pt-4 mb-1'>
								<div className='flex'>
									<span className=' inline-flex items-center px-3 bg-white border-t border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm'>
										<svg
											width='15'
											height='15'
											fill='currentColor'
											viewBox='0 0 1792 1792'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
										</svg>
									</span>
									<input
										type='password'
										id='design-login-password'
										className=' flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Password'
										name='password'
										onChange={handleOnBlur}
									/>
								</div>
							</div>
							<div className='flex flex-col pt-4 mb-5'>
								<div className='flex'>
									<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
										<svg
											width='15'
											height='15'
											fill='currentColor'
											viewBox='0 0 1792 1792'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
										</svg>
									</span>
									<input
										type='password'
										id='design-login-password'
										className=' flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Password'
										name='password2'
										onChange={handleOnBlur}
									/>
								</div>
							</div>
							<button
								type='submit'
								className='w-full h-14 px-4 py-2 text-base text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:border-2 border-black font-bold font-header hover:bg-white focus:outline-none focus:ring-2'
							>
								<span className='w-full'>SUBMIT</span>
							</button>
							<button
								onClick={handleGoogleLogin}
								className='flex items-center justify-center text-xl mt-5 border-2 border-slate-900 px-4 py-3 rounded cursor-pointer bg-transparent text-black focus:bg-black focus:text-white font-bold'
							>
								Login with Google
								<FcGoogle className='ml-2 text-2xl' />
							</button>
						</form>
						<div className='pt-12 pb-12 text-center'>
							<p>
								Already have an account?
								<Link to='/login' className='font-semibold underline ml-2'>
									Login here.
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className='w-1/2 shadow-2xl'>
					<img
						alt='login'
						className='hidden object-cover w-full h-screen md:block'
						src={loginPhoto}
					/>
				</div>
			</div>
		</>
	);
};

export default Signup;
