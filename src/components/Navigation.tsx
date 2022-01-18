export default function Navigation() {
    return (
        <nav>
            <a href="#" className="text-4xl font-bold uppercase mx-2">
                <span className="text-black">Web</span>
                    Studio
            </a>
            <ul className="flex justify-end">
                <li>
                    <a href="#" className="font-semibold text-green-700 mr-4">Студия</a>
                </li>
                <li>
                    <a href="#" className="font-semibold text-green-700 mr-4">Портфолио</a>
                </li>
                <li>
                    <a href="#" className="font-semibold text-green-700">Контакты</a>
                </li>
            </ul>
        </nav>
    )
}