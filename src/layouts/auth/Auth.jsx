
import { Outlet } from 'react-router-dom'
import img from "../../assets/login_logo.png"






const Auth = () => {
  return (
    <> 
     < div className='flex items-center justify-center gap-11 lg:mt-32 border-2 border-[gradient-to-r from-indigo-500 via-purple-500 to-pink-500] lg:m-36 p-16 shadow-md opacity-85 rounded-[30px]'>
        <img className=' md:block hidden' src={img} alt="" />
        <div>
            <Outlet />
        </div>
    </div>
    
    
    </>
  )
}

export default Auth