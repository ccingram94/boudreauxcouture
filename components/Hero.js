
export default function Hero () {
    return (
        <div>
            <div className="bg-gradient-to-t from-blue-200 to-blue-900 w-screen h-screen">
                <div className="flex flex-col flex-wrap text-center text-white font-cinzel p-6 pt-20">
                    <h2 className="text-sm md:text-lg">explore our timeless</h2>
                    <h1 className="text-lg md:text-3xl">☙ CURATED COLLECTIONS ❧</h1>
                    <h2 className="text-sm md:text-md">14k Gold / Sterling Silver</h2>
                </div>
                <div className="flex flex-row flex-wrap text-center justify-center font-cinzel text-white p-6 pt-10">
                    <div className="max-w-lg p-6 m-6 border-2 border-blue-300 border-opacity-80 bg-gray-900">
                        <h1 className="text-xl md:text-2xl">GULF TREASURE COLLECTION</h1>
                        <hr />
                        <h2 className="text-md md:text-md">Pearls ❦ 14k Gold ❦ Silver</h2>
                        <button className="bg-blue-300 p-3 m-3 rounded-sm">explore</button>
                    </div>
                    <div className="max-w-lg p-6 m-6 border-2 border-blue-300 border-opacity-80 bg-gray-900">
                        <h1 className="text-xl md:text-2xl">HEART OF TEXAS COLLECTION</h1>
                        <hr />
                        <h2 className="text-md md:text-md">Engagement Rings ❦ Wedding Bands</h2>
                        <button className="bg-blue-300 p-3 m-3 rounded-sm">explore</button>
                    </div>
                    <div className="max-w-lg p-6 m-6 border-2 border-blue-300 border-opacity-80 bg-gray-900">
                        <h1 className="text-xl md:text-2xl">LONE STAR COLLECTION</h1>
                        <hr />
                        <h2 className="text-md md:text-md">Gemstone ❦ 14k Gold ❦ Silver</h2>
                        <button className="bg-blue-300 p-3 m-3 rounded-sm">explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}