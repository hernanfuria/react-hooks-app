import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, LoginPage, AboutPage, Navbar } from "./"

/*
const routes = [
    {
        id: 0,
        path: '/',
        text: 'Home',
        component: <HomePage />,
    },
    {
        id: 1,
        path: '/login',
        text: 'Login',
        component: <LoginPage />,
    },
    {
        id: 2,
        path: '/about',
        text: 'About',
        component: <AboutPage />,
    },
]
*/

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <Navbar />
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/*" element={ <Navigate to='/' /> } />
        </Routes>
    </>
  )
}
