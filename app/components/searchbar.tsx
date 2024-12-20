export default function SearchBar() {
    return (
        <div className="flex flex-col items-center justify-center mt-full space-y-4 m-8">
            <input
                type="text"
                className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <div>
            <input
                type="button"
                className="w-40 my-4 mx-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg shadow-sm hover:ring-2 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                value="Googe Search"
            />
                <input
                type="button"
                className="w-40 my-4 mx-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg shadow-sm hover:ring-2 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                value="I'm Feeling Lucky"
                />
            </div>
        </div>


    )
}