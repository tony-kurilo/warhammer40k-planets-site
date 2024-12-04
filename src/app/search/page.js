import Layout from './components/Layout';

export default async function Page(){
    try {
        let data = await fetch('http://localhost:3000/api/fetchPlanetsNames')
        let planets_data = await data.json()

        return (
            <Layout data={planets_data} ></Layout>
        )
    } catch (error) {
        console.error('Failed to fetch planets data:', error);
        return <div>Error loading data</div>;
    }

}