export default function Container({children}: any) {
    return (
        <div className="md:bg-red-900 lg:bg-cyan-400 xl:bg-sky-400 p-20">{children}</div>
    )
}