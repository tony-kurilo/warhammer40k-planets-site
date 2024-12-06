import Layout from './components/Layout';
import {Suspense} from "react";

export default async function Page(){
    try {
        let res = await fetch('http://localhost:3000/api/fetchPlanetsNames');
        let data = await res.json();

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Layout planets_data={data} />
            </Suspense>
        )
    } catch (error) {
        console.error('Failed to fetch planets data:', error);
        return <div>Error loading data</div>;
    }
}