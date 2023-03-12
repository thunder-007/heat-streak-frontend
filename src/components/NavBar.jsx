import React, { useState } from 'react'
import { Drawer } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi"
const NavBar = () => {

    function LoginWithGithub() {
        const github_auth_url = new URL('http://github.com/login/oauth/authorize');
        const clientId = process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID;
        const redirection_url = window.location.origin + '/auth/github';
        github_auth_url.searchParams.set('client_id', clientId);
        github_auth_url.searchParams.set('redirect_uri', redirection_url);
        github_auth_url.searchParams.set('scope', 'repo,user');
        window.location.href = github_auth_url.toString();
    }

        const [open, setOpen] = useState(false);
            const showDrawer = () => {
                setOpen(true);
            };
            const onClose = () => {
                setOpen(false);
            };

            
  return (
    <div className="bg-light-blue-200">
                <Drawer title="STREAK-G" placement="left" onClose={onClose} open={open} width="200px" className='text-black text-[18px] bg-light-blue-400'>
                    <div>
                            <div className='items hover:bg-light-blue-200 text-black rounded-md px-1 py-2 transition duration-150'>
                                <a href="/">Home</a> 
                            </div>
                            <div className='items hover:bg-light-blue-200 text-black rounded-md px-1 py-2 transition duration-150'>
                                <a href="/about">About</a> 
                            </div>
                            <div className='items hover:bg-light-blue-200 text-black rounded-md px-1 py-2 transition duration-150'>
                                <a href="/contact">Contact</a> 
                            </div>
                    </div>
                </Drawer>
            <div className="navbar sm:px-1 bg-light-blue-400 sm:flex sm:justify-between ">
                <ul className="md:flex sm:space-x-6 sm:text-[18px] md:text-2xl sm:py-1 sm:flex-wrap hidden sm:flex ">
                    <li className="logo sm:px-2 sm:py-1 ">STREAK-G</li>
                </ul>
                <ul className="md:flex sm:space-x-6 sm:text-[18px] md:text-2xl sm:py-1 sm:flex-wrap hidden sm:flex "> 
                    <li className="items hover:bg-light-blue-200 sm:px-2 sm:py-1 hover:rounded-lg transition duration-300"><a href="/">Home</a> </li>
                    <li className="items hover:bg-light-blue-200 sm:px-2 sm:py-1 hover:rounded-lg transition duration-300"><a href="/about">About</a> </li>
                    <li className="items hover:bg-light-blue-200 sm:px-2 sm:py-1 hover:rounded-lg transition duration-300"><a href="/contact">Contact</a> </li>
                </ul>
                <ul className="sm:text-[18px] md:text-2xl sm:py-1 sm:mr-10 cursor-pointer hidden sm:flex" onClick={LoginWithGithub}>
                    <li className="items hover:bg-light-blue-200 sm:px-2 sm:py-1 hover:rounded-lg transition duration-300">Login </li>
                </ul>
                    
                <div className="sm:hidden text-2xl flex items-center" onClick={showDrawer}>
                    <GiHamburgerMenu></GiHamburgerMenu>
                        <div className="mx-auto">
                                STREAK-G
                        </div>
                </div>
                    
                
            </div>
        </div>
  )
}

export default NavBar