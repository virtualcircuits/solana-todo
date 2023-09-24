import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
import { WalletConnectProvider } from '../components/WalletConnectProvider'
// Import the solana wallet css
import '@solana/wallet-adapter-react-ui/styles.css'
 

function MyApp({ Component, pageProps }) {
    return (
        <>
            
            <div style={{ textAlign: 'center', color: 'white', fontSize: '40px' }}>Solana Blockchain</div>
            <div style={{ textAlign: 'center', color: 'white', fontSize: '30px' }}>To Do App</div>

            <main>
                {/* Wrap provider around App */}
                <WalletConnectProvider>
                    <Component {...pageProps} />
                </WalletConnectProvider>
            </main>
           
        </>
    )
}

export default MyApp






