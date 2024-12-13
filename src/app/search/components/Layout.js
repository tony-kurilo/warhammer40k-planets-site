'use client'
import "../../styles/search.css"
import styles from '../../styles/seach.module.css'
import {useState, Suspense} from "react";
import Loading from "./loading";
import Image from "next/image";
import {useSearchParams, usePathname, useRouter} from "next/navigation";

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
        replace(`/planet/${id}`);
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="terminal">
                <div className="scanline"></div>
                <div>
                    <div className={"text-primary-text-color"}>
                        <div className={styles.container}>
                            <Suspense fallback={<Loading />}>
                                <Image
                                    src={"/images/Imperial_Aquila_Logo1.png"}
                                    width={320}
                                    height={320}
                                    alt={"Imperium Sygil"}
                                    className={styles.image}
                                />
                            </Suspense>
                            <h1 className="mb-4">Praise the Omnissiah, tech-priest!</h1>
                            <input
                                type="text"
                                className={styles["planet-input"]}
                                placeholder={"start entering the planet"}
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                defaultValue={searchParams.get("query")?.toString()}
                            />
                            <div>
                                {filteredList.map((item) => (
                                    <div
                                        key={item.id}
                                        className={styles["planet-item"]}
                                        onClick={() => handleRedirect(item.id)}
                                    >
                                        <h1>{item.name}</h1>
                                        <h2>Segmentum {item.segmentum}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}