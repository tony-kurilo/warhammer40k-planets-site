'use client'
import '../../styles/search.css';


export default function Layout(planets_data) {
    const planets = planets_data;

    return (
        <div>
            <div className={"container"}>
                <div className={"text-primary-text-color center text-center"}>
                    <h1 className={''}>Welcome back</h1>
                    <h1 className={''}>Praise the Omnissiah, tech-priest !</h1>
                    <input type={'text'} className={"planet-input "} placeholder={"start entering the planet"}></input>
                </div>
            </div>
        </div>
    )
}