import Layout from './components/Layout';

export default async function Page(){
    try {
        let res = await fetch('http://localhost:3000/api/fetchPlanetsNames');
        let data = await res.json();

        return (
            <Layout planets_data={data}></Layout>
        )
    } catch (error) {
        console.error('Failed to fetch planets data:', error);
        return <div>Error loading data</div>;
    }
}