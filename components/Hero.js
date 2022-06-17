import Link from 'next/link'
import Image from 'next/image'
import austin from '../public/austin.jpg'


export default function Hero () {
    return (
        <div className="w-full max-h-xl flex flex-row flex-wrap text-center justify-center">
            <div className="bg-austin bg-center bg-cover w-screen xl:w-1/2">
                <div className="bg-indigo-600 h-full opacity-50">
                    <Image src={austin} className="opacity-0"/>
                </div>
            </div>
            <div className="bg-gradient-to-t from-indigo-200 to-gray-200 w-screen xl:w-1/2 text-blue-900 font-cinzel text-center p-12">
                <h1 className="text-2xl md:text-3xl pt-6 lg:pt-6">The Austin Collection</h1>
                <h2 className="text-md md:text-lg p-3"> Freshwater Pearls ❦ Amethyst ❦ Citrine ❦ Wildflowers ❦ Resin</h2>
                <div className="flex flex-row flex-wrap justify-center items-center text-center p-3 pt-6">
                    <div className="p-3 max-w-sm">
                        <h2 className="text-md lg:text-xl border-b-2 p-2"> Violet Crown I and II</h2>
                        <h3 className="text-sm lg:text-md p-2">Amethyst ❦ Freshwater Pearls ❦ Gold Plated Brass</h3>
                        <p className="text-sm lg:text-md font-roboto">Violet crowns of natural amethyst accented by freshwater pearls and gold plated brass.</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center text-center p-3 m-6">
                        <div className="p-3 max-w-sm">
                            <h2 className="text-md lg:text-xl border-b-2 p-2"> Lady Bird I and II</h2>
                            <h3 className="text-sm lg:text-md p-2">Citrine ❦ Wildflowers ❦ 925 Sterling Silver</h3>
                            <p className="text-sm lg:text-md font-roboto">Glittering citrine, 925 Sterling Silver, and resin cast wildflowers as fresh as the Lady Bird's garden.</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center text-center p-3 m-6">
                        <div className="p-3 max-w-sm">
                            <h2 className="text-md lg:text-xl border-b-2 p-2"> Joplin I and II</h2>
                            <h3 className="text-sm lg:text-md p-2">Resin ❦ 14k Gold</h3>
                            <p className="text-sm lg:text-md font-roboto">Kosmically blue resin swirls and 14k gold peace signs to resurrect the spirits of the 60s.</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center text-center p-3 m-6">
                        <div className="p-3 max-w-sm">
                            <h2 className="text-md lg:text-xl border-b-2 p-2"> Greenbelt</h2>
                            <h3 className="text-sm lg:text-md p-2">Jade ❦ 925 Sterling Silver</h3>
                            <p className="text-sm lg:text-md font-roboto">Polished genuine jadeite in vivid green and soft white.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}