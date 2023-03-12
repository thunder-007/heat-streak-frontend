// import { Button } from "@material-tailwind/react";
import "./IndexPage.css";
import NavBar from "../components/NavBar";
import Before from "../assets/before.png";
import After from "../assets/after.png";
import { Button } from "@material-tailwind/react";
function IndexPage() {
    function LoginWithGithub() {
        const github_auth_url = new URL('http://github.com/login/oauth/authorize');
        const clientId = process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID;
        const redirection_url = window.location.origin + '/auth/github';
        github_auth_url.searchParams.set('client_id', clientId);
        github_auth_url.searchParams.set('redirect_uri', redirection_url);
        github_auth_url.searchParams.set('scope', 'repo,user');
        window.location.href = github_auth_url.toString();
    }

    return (
        <>
        <NavBar />
        <div className='flex flex-col justify-center text-center content animate-slide-in-left '>
           <div className="flex space-x-5 justify-center mt-3">
                <div className="border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out"><a href="https://github.com/thunder-007" target="_blank" rel="noreferrer">🚀 @Thunder-007</a> </div>
                <div className="border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out"><a href="https://github.com/abhishekpm15" target="_blank" rel="noreferrer"> @abhishekpm15 🚀</a></div>
           </div>

           <div className="flex flex-col mt-7 md:flex-row md:justify-center  md:space-x-10 md:mt-10">
                <div>
                    <div className="md:text-xl">
                        What is STREAK-G ?
                    </div>
                    <div className="w-96  flex flex-col justify-center mx-auto text-[10px] lg:w-[500px]">
                        <div>
                            <img src={Before} alt="before" className="mt-4 mb-1 rounded-xl hover:scale-105 transition duration-200"  />
                            <span>Before</span>
                        </div>
                        <div>
                            <img src={After} alt="after" className="mb-1 mt-4 rounded-xl hover:scale-105 transition duration-200" />
                            <span>After</span>
                        </div>
                    </div>
                </div>
                <div className="instructions text-justify w-72 md:mx-auto mx-auto mt-5 text-sm md:w-96 lg:w-[400px] lg:text-base">
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
            <div className="mt-[6%] space-x-5">
                <Button variant="primary" color="blue" onClick={LoginWithGithub}>Instructions</Button>
                <Button variant="primary" color="blue" onClick={LoginWithGithub}>Login</Button>
            </div>
        </div>
        
        </>
    );
}

export default IndexPage;