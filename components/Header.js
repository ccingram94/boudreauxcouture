import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'

export default function Header () {
    return (
        <div className="flex flex-row w-screen text-white bg-bluebonnets bg-cover bg-bottom">
            <div className="flex flex-row flex-wrap justify-between justify-center items-center w-full bg-blue-900 bg-opacity-80 ">
                <h1 className="font-cinzel text-lg md:text-3xl p-6">☙ Boudreaux ❧</h1>
                <div className="flex flex-row flex-wrap p-3 m-3 text-md md:text-3xl">
                    <ShoppingCartIcon className="h-12 w-12 md:text-xl p-3" />
                    <UserIcon className="h-12 2-12 md:text-xl p-3" />
                </div>
            </div>
        </div>
    )
}