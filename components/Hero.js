import Link from 'next/link'


export default function Hero () {
    return (
        <div className="w-screen h-full flex flex-row flex-wrap text-center justify-center">
            <div className="w-full lg:w-1/2 h-full">
                <div className="w-full">
                    <video loop="true" autoplay="autoplay" muted className="w-full">
                        <source src="brides.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="bg-blue-100 w-screen lg:w-1/2 text-blue-900 font-cinzel text-center p-12">
                <h1 className="text-xl md:text-2xl pt-6 lg:pt-12">unique rings for every bride</h1>
                <h2>engagement rings wedding bands bridal</h2>
            </div>
        </div>
    )
}