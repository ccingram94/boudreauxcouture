import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'

export default function Header () {
    return (
        <div className="flex flex-row flex-wrap bg-blue-900 text-white justify-between">
            <h1 className="font-italiana text-lg md:text-3xl p-6">☙ Boudreaux Couture ❧</h1>
            <div className="flex flex-row flex-wrap p-3">
                <h1 className="font-italiana text-md md:text-xl p-3">Option 1</h1>
                <h1 className="font-italiana text-md md:text-xl p-3">Option 2</h1>
                <h1 className="font-italiana text-md md:text-xl p-3">Option 3</h1>
            </div>
            <div className="flex flex-row flex-wrap p-6">
                <UserIcon />
                <ShoppingCartIcon />
            </div>
        </div>
    )
}