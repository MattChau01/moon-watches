import NavBar from "../components/Navbar"
import Hero from "../components/hero"
// import swatchHero from "../assets/swatch-hero.png"

export default function Home () {
    return (
        <>
            <div className="container">
                {/* <div className="flex justify-center align-center">Home page</div> */}
                <NavBar />
                {/* empty div for test */}
                {/* <div className="bg-black w-full" style={{ position: 'absolute', right: '0' }}>
                    <img src={swatchHero} alt='hero'/>
                </div> */}

                {/* import hero component */}
                <Hero />


            </div>
        </>
    )
}