import { useMemo } from "react"
import { BlogProvider } from "src/context/Blog"
import { Router } from "src/router"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import "./App.css"


export const App = () => {
  const endpoint = "https://frosty-small-spring.solana-devnet.discover.quiknode.pro/4660428cadbd4cdf18186fe3cd9ff42d6ab490e4/"
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  )

  return (
  
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets ={wallets} autoConnect >
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
