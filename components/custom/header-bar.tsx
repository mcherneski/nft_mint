import { ConnectButton } from "@rainbow-me/rainbowkit"

export function HeaderBar() {
    
    return (
        <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            <h1 className='text-2xl font-bold'>NFT Collection Name</h1>
            <div className='flex justify-end items-center p-2'>
                <ConnectButton />
            </div>
        </header>
    )
}