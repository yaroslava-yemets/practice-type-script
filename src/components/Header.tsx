import Container from "./Container"
import Navigation from "./Navigation"
export default function Header() {
    return (
        <header className="text-blue-500 font-nautigal">
            <Container>
                <h1 className="text-underline p-6 border-t border-b border-green-700 text-3xl mb-3">Hello header</h1>
                <Navigation />
            </Container>
        </header>
    )
}