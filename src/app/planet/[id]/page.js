'use server'
import Layout from './components/Layout';

export async function generateStaticParams() {
    try {
        const res = await fetch('http://localhost:3000/api/fetchPlanetsNames');
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        const planets = await res.json();
        return planets.map((planet) => ({
            id: planet.id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching planets:", error);
        return []; // Возвращаем пустой массив, если запрос не удался
    }
}

export default async function Page({ params }) {
    const { id } = await params;
    try {
        const res = await fetch(`http://localhost:3000/api/planet/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch planet: ${res.statusText}`);
        }
        const data = await res.json();
        console.log("Fetched planet data:", data); // Логирование данных

        return (
            <Layout planets_data={data}></Layout>
        );
    } catch (error) {
        console.error("Error fetching planet data:", error);
        return (
            <div className={"text-white"}>
                <h1>Error loading planet data</h1>
                <p>{error.message}</p>
            </div>
        );
    }
}
