import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xaa7F8a03132ae60D9b2366F69Aa12D1FC0F457b1&order_direction=asc"

        // "https://api.opensea.io/api/v1/assets?token_ids=100125324817140700473098673733568876555088890877521994710768706051812049813505&token_ids=100125324817140700473098673733568876555088890877521994710768706046314491674625&token_ids=100125324817140700473098673733568876555088890877521994710768706062807166091265&asset_contract_address=0x495f947276749ce646f68ac8c248420045cb7b5e&order_direction=asc"
        // "https://api.opensea.io/api/v1/collections?asset_owner=0xc457fee0564bf3eb972114762f62ab45c0e3590b&offset=0&limit=300"
      );
      console.log(openseaData.data.assets.reverse());
      console.log(openseaData.data.assets);

      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
