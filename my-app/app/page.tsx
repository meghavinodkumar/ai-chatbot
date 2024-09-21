


'use client';
import Image from 'next/image';
import Chat from './components/Chat';
export default function Hme(){
    return (
        <main className="App">
            <div className="container">
                <div className="header">
                    <Image src="/logo.png" alt="SuperViral.ai logo"></Image>
                    <p>Talk to<span className="special-text">MEGATRON 2.0</span> </p>
                    </div>
                    <Chat/>

                </div>
        </main>
    )
}