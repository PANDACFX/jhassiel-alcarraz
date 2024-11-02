// components/ConectarWallet.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';

function ConectarWallet () {
  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Solicitar al usuario que cambie a la red Conflux eSpace
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x1',
            chainName: 'Conflux eSpace',
            nativeCurrency: {
              name: 'CFX',
              symbol: 'CFX',
              decimals: 18
            },
            rpcUrls: ['https://evm.confluxrpc.com'],
            blockExplorerUrls: ['https://evm.confluxscan.net']
          }]
        });

        // Solicitar acceso a la cuenta
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Conectado a MetaMask en Conflux eSpace');
      } catch (error) {
        console.error(error);
        // Manejar el error (mostrar un mensaje al usuario)
        // ... 
      }
    } else {
      alert('Por favor, instala MetaMask para usar esta función.');
    }
  };

  return (
    <Button variant="primary" onClick={connectToMetaMask}>
      Conectar Wallet
    </Button>
  );
}

export default ConectarWallet;