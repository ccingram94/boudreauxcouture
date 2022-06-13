import Link from 'next/link'


export default function Hero () {
    return (
        <div className="w-screen h-full flex flex-row flex-wrap text-center justify-center">
            <div className="w-full xl:w-1/2 h-full">
                <div className="w-full bg-gradient-to-l from-blue-100 to-blue-300">
                    <video autoPlay loop muted className="w-full opacity-90">
                        <source src="brides.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="bg-gradient-to-t from-indigo-100 to-gray-100 w-screen xl:w-1/2 text-blue-900 font-cinzel text-center p-12">
                <h1 className="text-2xl md:text-3xl pt-6 lg:pt-12">as unique as the bride</h1>
                <h2 className="text-md md:text-xl p-3 m-3">engagement rings ❦ wedding bands ❦ bridal jewelry</h2>
            </div>
        </div>
    )
}