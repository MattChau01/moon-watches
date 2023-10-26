import NavBar from "../components/Navbar"

export default function Home () {
    return (
        <>
            <div className="container">
                {/* <div className="flex justify-center align-center">Home page</div> */}
                <NavBar />
                {/* empty div for test */}
                <div className="bg-black">
                    body
                </div>
            </div>
        </>
    )
}