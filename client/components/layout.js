import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css"
import { isAuth, logout } from "../helpers/auth";

Router.onRouteChangeStart = url => nProgress.start()
Router.onRouteChangeComplete = url => nProgress.done()
Router.onRouteChangeError = url => nProgress.done();

const Layout = ({children}) => {
    
    const head = () => (
        <React.Fragment>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="/static/css/styles.css"/>

        </React.Fragment>
    );
    
    const nav = () => (
        <ul className="nav nav-tabs bg-dark">
            
            <li className="nav-item">

                <Link className="nav-link text-light" href="/">Home</Link>
            
            </li>

            {!isAuth() && (
                <React.Fragment>
                    <li className="nav-item">
            
            <Link className="nav-link text-light" href="/register">Register</Link>
            
        </li>

        <li className="nav-item">
        
            <Link className="nav-link text-light" href="/login">Login</Link>
            
        </li>
                </React.Fragment>
            )}

            {
                isAuth() && isAuth().role === 'admin' && (
                    <li className="nav-item ms-auto">
            
                    <Link className="nav-link text-light" href="/admin">
                        
                    Admin</Link>
                
                    </li>
                )
            }


            {
                isAuth() && isAuth().role === 'subscriber' && (
                    <li className="nav-item ms-auto">
            
                    <Link className="nav-link text-light" href="/user">
                        
                    User</Link>
                
                    </li>
                )
            }

            {isAuth() && (
                <li className="nav-item">
            
                <Link onClick={logout} className="nav-link text-light" href="/login">Logout</Link>
                
                </li>
            )}

    

        </ul>
    );

    return <React.Fragment>
        {head()} 
        <div>
        {nav()} 
        </div>
        <div className="container pt-5 pb-5"> {children} </div>
        </React.Fragment>
}

export default Layout