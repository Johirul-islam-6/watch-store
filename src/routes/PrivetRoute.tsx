import { useAppSelector } from "@/redux/hooks"
import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom";


interface IProps {
  children : ReactNode
}

export default function PrivetRoute({children} : IProps ) {
 
    const {user, isLoading} = useAppSelector((state => state.user));
    const pathname = useLocation()
    if(isLoading){
       return <div className="flex justify-center items-center h-[100vh] ">
      <div className="rounded-full border-4 border-t-4 border-green-600 h-20 w-20 animate-spin"></div>
      </div>
    }
    if(!user.email && !isLoading){
        return <Navigate state={{path : pathname}} to={'/login'}/>
    }

    return children;
}
