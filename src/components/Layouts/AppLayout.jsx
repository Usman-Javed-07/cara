import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
           <Header/>
            <Outlet/>
           <Footer/>
        </>
    )
}