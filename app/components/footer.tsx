    import Link from "next/link"

    export default function Footer() {
        return (
            <footer className="text-sm">
                <div className="max-w-full px-8 py-3 bg-gray-100">Pakistan</div>
                <div>
                    <div className="border-t bg-gray-100 pl-16 py-3">
                        <div>
                            <Link
                                href="./"
                                className="mr-6 hover:underline underline-offset-1">
                                About
                            </Link>
                            <Link
                                href="./"
                                className="mr-6 hover:underline underline-offset-1">
                                Advertising
                            </Link>
                            <Link
                                href="./"
                                className="mr-6  hover:underline underline-offset-1">
                                Business
                            </Link>
                            <Link
                                href="./"
                                className="mr-6  hover:underline underline-offset-1">
                                How Search works
                            </Link>
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href="./"
                                className="mr-6  hover:underline underline-offset-1">
                                Privacy
                            </Link>
                            <Link
                                href="./"
                                className="mr-6  hover:underline underline-offset-1">
                                Terms
                            </Link>
                            <Link
                                href="./"
                                className="mr-6  hover:underline underline-offset-1">
                                Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }