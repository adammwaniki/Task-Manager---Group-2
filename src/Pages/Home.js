// Giving the Home component some starter code 
import { useState, useEffect } from "react";
// Importing the NavBar component that has the NavLink with the prop called to which works like the hypertext reference
// I have added it here since the navbar will be on the homepage
import NavBar from "../components/NavBar";

export default function Home () {
    //the fetch will most likely be handled from here hence why I've included the imports for useEffect and useState

    return(
        <>
            <header>
                <NavBar />
            </header>
            <main>

                {/*Add some code into this section for the body of the home component in the main tag*/}

            </main>
        </>
    );
}