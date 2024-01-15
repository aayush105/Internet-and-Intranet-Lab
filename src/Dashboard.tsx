import { signOut } from "firebase/auth";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase";

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const checkToken = () => {
            const userToken = localStorage.getItem('token');
            if (userToken){
                console.log("User is valid");
            } else {
                console.log("User is not valid");
                navigate('/');
            }
        }
        checkToken();
    },[])

    const logoutUser = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            navigate('/');
        } catch (error:any) {
            console.log("Error message:", error.message);
            alert(error.message);
        }
    }

  return (
    <>
        <div>Dashboard</div>
        <button onClick={logoutUser}>Logout</button>
    </>
  )
}

export default Dashboard