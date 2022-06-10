import { useEffect, useState } from "react";

// take in symbol and display price
const Price=({match: { params: { symbol}}})=>{
    const apiKey = "09529A6E-A608-45E0-981B-9D8395F6DCC7";
    // const symbol = match.params.symbol;
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
    const [coin, setCoin] = useState(null);

    const getCoin = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
    };
    useEffect(() => {
        getCoin();
    }, []);
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };
    return coin ? loaded() : loading();
};

export default Price;