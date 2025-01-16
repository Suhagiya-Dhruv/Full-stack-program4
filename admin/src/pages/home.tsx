import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { getUserList } from "@/store/userSlice";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  const { users } = useSelector((state: RootState) => state.user)
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getUserList())
  }, [])

  console.log(users)

  return (
    <div className="flex">
      <div>User</div>
      <Button>Create Admin</Button>
      {/* {users.map(user => <h2>{user.email}</h2>)} */}
    </div>
  )
}

export default Home