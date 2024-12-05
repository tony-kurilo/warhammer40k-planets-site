'use client'
import '../../styles/search.css';
import {useState} from "react";
import {useSearchParams, usePathname, useRouter, redirect} from "next/navigation";

export default function Layout({planets_data}) {
    const [list, setList] = useState(planets_data);
    const [search, setSearch] = useState('');
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleSearch(value) {
        setSearch(value);
        const params = new URLSearchParams(searchParams);
        if (value){
            params.set('query', value);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const filteredList =
        search.trim() === ''
            ? [] // Пустой массив, если поле поиска пустое
            : list.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            ).slice(0, 4);

    if (!Array.isArray(list) || list.length === 0) {
        return <div className={'text-primary-text-color'}>Loading data...</div>;
    }

    function handleRedirect(id){
        redirect(`/planet/${id}`);
    }

    return (
        <div>
            <div className={"container"}>
                <div className={"text-primary-text-color center text-center"}>
                    <h1 className={''}>Welcome back</h1>
                    <h1 className={'mb-4'}>Praise the Omnissiah, tech-priest !</h1>
                    <input
                        type={'text'}
                        className={"planet-input mb-4"}
                        placeholder={"start entering the planet"}
                        value = {search}
                        onChange={(e) => handleSearch(e.target.value)}
                        defaultValue={searchParams.get('query')?.toString()}
                    >
                    </input>
                    <div>
                        {filteredList.map((item) => (
                            <div key={item.id}
                                 className={`planet-item`}
                                onClick={(e) => handleRedirect(item.id)}
                            >
                                <h1>{item.name}</h1>
                                <h2>Segmentum {item.segmentum}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}