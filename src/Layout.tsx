import { Navigate, Link } from "react-router-dom";
import { useAuth } from "./auth";

export default function Layout(){
    const {token, logout} = useAuth();

    if (!token) return <Navigate to="/login" replace/>

    return (
        <div className= "p-6">
            <div className="flex justify-between mb-4">
                <Link to="/dashboard">Dashboard</Link>
                <button onClick={logout} className="btn btn-sm">Cerrar sesion</button>
            </div>
        </div>
    )
}