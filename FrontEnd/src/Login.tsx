import { useState } from 'react';
import CompanyLogo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';


/**
 * it has handle submit to handle the Sign In button which has post method.
 * Once user is logged in it passes the username and password to backend and if it is authenticated it will navigate user to home page with user token or id.
 * @returns Login component which is the first page of the app
 */

function Login(): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    //handling submit 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(username);
      console.log(password);

      navigate(`./Home?username=${username}`);
    };
    
    
  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="border border-gray-100 mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-6 rounded-md shadow-2xl bg-cyan-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-10 w-auto"
                src={CompanyLogo}
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                             Welcome back!
            </h2>
            <p className="mt-2 text-center text-lg text-cyan-500 pb-10">
                     Please sign in to access your account.
            </p> 
        </div>
          <form onSubmit = {handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button type="submit" className="block mx-auto w-32  justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                    Sign in
            </button>
           

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
};
export default Login;