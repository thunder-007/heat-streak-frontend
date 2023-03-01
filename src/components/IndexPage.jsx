import { Button } from "@material-tailwind/react";
import "./IndexPage.css";
import After from "../assets/after.png";
import Before from "../assets/before.png"
function LoginWithGithub() {
    const github_auth_url = new URL('http://github.com/login/oauth/authorize');
    const clientId = process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID;
    const redirection_url = window.location.origin + '/auth/github';
    github_auth_url.searchParams.set('client_id', clientId);
    github_auth_url.searchParams.set('redirect_uri', redirection_url);
    github_auth_url.searchParams.set('scope', 'repo,user');
    window.location.href = github_auth_url.toString();
}   

function IndexPage() {
    return (
        <div className='flex flex-col justify-center text-center'>
            <div className='font-semibold text-3xl p-2 bg-blue-700 w-full mx-auto hover:bg-blue-400 transition duration-300 cursor-pointer text-white'>Home Page</div>
            <div className='text-xl font-bold p-2 mt-2 animate-pulse'>Visit and ⭐⭐ us on Github</div>
            <div className='text-md font-semibold mb-5 animate-slide-in-left'><a href="https://github.com/thunder-007" target="_blank" rel="noreferrer">🚀 @Thunder-007</a> + <a href="https://github.com/abhishekpm15" target="_blank" rel="noreferrer"> @abhishekpm15 🚀</a> </div>
            <hr className="border-gray-300 w-96 mx-auto border-t-2"></hr>
            <div className="mt-16 flex justify-center space-x-24 items-center">
                <div className="text-xl font-semibold animate-slide-in-left">
                    What is Heat-Streak-Generator ?
                    <img src={Before} alt="before" className="mb-1 mt-5" width="650px" />
                    <div className="text-sm">Before</div>
                    <img src={After} alt="after" className="mt-4" width="650px"/>
                    <div className="text-sm">After</div>
                </div>
                <div className="w-[40%] text-justify text-lg animate-slide-in-left">
                    👉The github heat-streak-generator is a tool that is used to generate heat streaks on github.
                    <br />
                    <br />
                    👉The user can select how many commits he/she wants to generate and the tool will generate the commits for the user.
                    <br />
                    <br />
                    👉The user can also select the date from which he/she wants to start generating the commits.
                    <br />
                    <br />
                    👉Login to see the magic !
                </div>
            </div>
            <div className="mt-[6%]">
                <Button variant="primary" color="blue" onClick={LoginWithGithub}>Login</Button>
            </div>
        </div>
    );
}

export default IndexPage;