import swatchHero from "../assets/swatch-hero.png"

export default function Hero() {

    return (
        <>
            <div>
                <img src={swatchHero} alt='hero' style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{color: '#fff', backgroundColor: '#000'}}>test</div>
        </>
    )
}