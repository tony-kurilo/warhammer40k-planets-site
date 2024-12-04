'use client'
import '../../styles/search.css';
import {useState} from "react";


export default function Layout({planets_data}) {
    const [search, setSearch] = useState('');
    const [list, setList] = useState(planets_data);

    console.log('Initial data:', planets_data);
    console.log('List state:', list);

    const filteredList = Array.isArray(list)
        ? list.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    if (!Array.isArray(list) || list.length === 0) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <div className={"container"}>
                <div className={"text-primary-text-color center text-center"}>
                    <h1 className={''}>Welcome back</h1>
                    <h1 className={''}>Praise the Omnissiah, tech-priest !</h1>
                    <input
                        type={'text'}
                        className={"planet-input "}
                        placeholder={"start entering the planet"}
                        value = {search}
                        onChange={(e) => setSearch(e.target.value)}
                    >
                    </input>
                    <div>
                        {filteredList.map((item) => (
                            <div key={item.id}>
                                {item.name} ({item.segmentum})
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}