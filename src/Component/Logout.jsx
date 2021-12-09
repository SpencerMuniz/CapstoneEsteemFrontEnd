import { useHistory } from "react-router-dom";
import axiosInstance from "../api/EsteemAPI";

export default function Logout() {
    const history = useHistory();
  
    function handleLogout() {
      const response = axiosInstance.post("auth/logout/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
      axiosInstance.defaults.headers["Authorization"] = null;

      console.log("SUCCESSFULLY LOGGED OUT")

      // Redirect to page where logged out users go
      history.push("/login");
    }
    return <div onClick={handleLogout}>
      <button>Logout</button>
    </div>;
}     
