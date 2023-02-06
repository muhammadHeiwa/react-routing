import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

export default function NotFound() {
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])
    return(
        <MainLayouts>
            <div>
                <h1>404 Not Found Page, will back to Home after a few sec..</h1>
            </div>
        </MainLayouts>
    )
};
