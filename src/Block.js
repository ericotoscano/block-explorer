import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function Block({ blockNumber }) {
  const [block, setBlock] = useState({});

  useEffect(() => {
    async function getBlock() {
      setBlock(await alchemy.core.getBlock(blockNumber));
    }

    getBlock();
  }, [blockNumber]);

  const blockDetails = Object.values(block);

  return (
    <div>
      <table>
        <tr>
          <td>Hash</td>
          <td>{blockDetails[0]}</td>
        </tr>
        <tr>
          <td>Parent Block Hash</td>
          <td>{blockDetails[1]}</td>
        </tr>
        <tr>
          <td>Timestamp</td>
          <td>{blockDetails[3]}</td>
        </tr>
        <tr>
          <td>Miner</td>
          <td>{blockDetails[8]}</td>
        </tr>
      </table>
    </div>
  );
}

export default Block;
