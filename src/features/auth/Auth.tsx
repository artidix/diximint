
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginThunk } from './loginThunk'
import { setChainThunk } from './setChainThunk';

declare let window: any;


export const Auth = () => {
  const dispatch = useAppDispatch();

  const setWallet = async (accounts?: any) => {
    setChain();
    dispatch(loginThunk());
  }

  async function setChain() {
    dispatch(setChainThunk());
  }

  useEffect(() => {
    setWallet();

    const { ethereum } = window;
    if (ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => { setWallet(accounts); });
      window.ethereum.on('chainChanged', async (chainId: any) => { setChain(); });
      window.ethereum.on('connect', async (connectInfo: any) => { setChain() });
      window.ethereum.on('disconnect', (error: any) => { console.log('disconnect wallet'); window.location.reload(); });
    }
  }, []);

  return (<></>);
}