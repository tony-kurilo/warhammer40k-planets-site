import Layout from './components/Layout';

export default async function Page(){
    let data = await fetch('http://localhost:3000/api/fetchPlanetsNames')
    let planets_data = await data.json()

    return (
        <Layout data={planets_data} ></Layout>
    )
}