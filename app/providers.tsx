'use client'
import * as React from 'react'
import {
    getDefaultConfig,
    RainbowKitProvider,
    getDefaultWallets
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import {
    base, 
    baseSepolia
} from 'wagmi/chains'
import {
    QueryClientProvider,
    QueryClient
} from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css'; 

const { wallets } = getDefaultWallets()

const config = getDefaultConfig({
    appName: 'NFT Boilerplate',
    projectId: 'PROJECT_ID',
    wallets: [...wallets],
    chains: [base, baseSepolia],
    ssr: true
})

const queryClient = new QueryClient()

export function Providers({ children }: {children: React.ReactNode}) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}