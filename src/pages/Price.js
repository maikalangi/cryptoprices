import React from "react";

const Price=(props)=>{
    const apiKey = "09529A6E-A608-45E0-981B-9D8395F6DCC7";
    const symbol = props.match.params.symbol;
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    
    const [coin, setCoin] = React.useState(null);

    const getCoin = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
    };
    React.useEffect(() => {
        getCoin();
    }/* , [] */);
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
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return coin ? loaded() : loading();
};

export default Price;