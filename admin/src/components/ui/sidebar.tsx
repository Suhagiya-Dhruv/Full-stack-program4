import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {

    const { user } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/login')

    }
    return (
        <div className="w-1/5 bg-blue-300 h-[100vh]">
            <Avatar>
                <AvatarFallback className="text-red-600 font-bold uppercase">{user?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>

            {user?.name}
            {user?.role}
            <div className="flex flex-col">
                <Link to='/users'>User</Link>
                <Link to='/quiz'>Quiz</Link>

            </div>

            <button onClick={logoutHandler}>logout</button>
        </div>
    )
}

export default SideBar