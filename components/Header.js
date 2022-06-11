import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'

export default function Header () {
    return (
        <div className="flex flex-row flex-wrap w-screen text-white bg-bluebonnets bg-cover bg-bottom">
            <div className="flex flex-row flex-wrap justify-between w-screen bg-blue-900 bg-opacity-80">
                <h1 className="font-cinzel text-lg md:text-3xl p-6">☙ Boudreaux Couture ❧</h1>
                <div className="flex flex-row flex-wrap p-3 text-md md:text-3xl">
                    <h1 className="font-cinzel text-md md:text-xl p-3">Option 3</h1>
                    <ShoppingCartIcon />
                    <UserIcon />
                </div>
            </div>
        </div>
    )
}