import './App.css';
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="mt-8">
                <h1 className="text-5xl font-bold">Welcome to Project Zohar</h1>
                <p className="mt-8 text-xl">This a web app used to help people keep track of their progress in completing any of the 3 mainline Xenoblade Chronicles games</p>
                <p className="mt-10 text-lg">To get started click one of the games below to start the checklist process for that game</p>

                <div className="mt-12 w-screen flex flex-row justify-center items-center items-stretch">
                    <div className="">
                        <Link to={"/xeno1"}>
                        <img className="w-52 hover:w-56" src={require("./images/XenobladeOneBoxArt.jpg")} /> 
                        </Link>
                    </div>
                    <div>
                        <Link to={"/xeno2"}>
                        <img className="w-44 mx-32 hover:w-48" src={require("./images/XenobladeTwoBoxArt.jpg")} /> 
                        </Link>
                    </div>
                    <div>
                        <Link to={"/xeno3"}>
                        <img className="w-44 hover:w-48" src={require("./images/XenobladeThreeBoxArt.jpg")} /> 
                        </Link>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default App;
