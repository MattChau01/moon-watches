// PRACTICE
import { useRef } from 'react';

import swatchlogo from '../assets/swatch-logo.png';

export default function NavBar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        // DESKTOP VIEW
        // <div className='w-screen bg-white h-[4rem] pt-5'>
        //     <div className="flex justify-between">
        //         <div className='w-1/12 pl-3'>
        //             <img src={swatchlogo} alt='logo' style={{
        //                 width: '10rem'
        //             }}
        //             className='cursor-pointer' />
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 New Arrivals
        //             </a>
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 Watches
        //             </a>
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 Gifts
        //             </a>
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 Moonswatch
        //             </a>
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 Customize
        //             </a>
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 Our World
        //             </a>
        //         </div>
        //         <div className="w-1/10">
        //             <a className='hover:underline cursor-pointer'>
        //                 Flik Flak
        //             </a>
        //         </div>
        //         <div className="w-1/14">
        //             <a className='cursor-pointer'>
        //                 <i className="fa-solid fa-user"></i>
        //             </a>
        //         </div>
        //         <div className="w-1/14">
        //             <a className='cursor-pointer'>
        //                 <i className="fa-solid fa-magnifying-glass"></i>
        //             </a>
        //         </div>
        //         <div className="w-1/14">
        //             <a className='cursor-pointer'>
        //                 <i className="fa-solid fa-heart"></i>
        //             </a>
        //         </div>
        //         <div className="w-1/14 pr-3">
        //             <a className='cursor-pointer'>
        //                 <i className="fa-solid fa-bag-shopping"></i>
        //             </a>
        //         </div>
        //     </div>
        // </div>

        // MOBILE HEADER {DONT DELETE}
        // <div className="w-full flex justify-between h-[4rem] pt-5 bg-white">
        //     <div className="pl-5 w-2/5">
        //         <i className="fa-solid fa-bars"></i>
        //     </div>
        //     <div className="w-2/5 text-center mr-5 pr-5">
        //         {/* SWATCH */}
        //         <img src={swatchlogo} alt='logo'/>
        //     </div>
        //     <div className="w-1/6">
        //         <i className="fa-solid fa-magnifying-glass"></i>
        //     </div>
        //     <div className="pr-5 w-1/8">
        //         <i className="fa-solid fa-bag-shopping"></i>
        //     </div>
        //     {/* <div>
        //     {
        //         (window.innerWidth < 500)
        //         ? 
        //         (
        //             <div>
        //                 ONE
        //             </div>
        //         )
        //         :
        //         (
        //             <div>
        //                 TWO
        //             </div>
        //         )
        //     }
        //     </div> */}
        // </div>


        // <div>
        //     {
        //             window.innerWidth < 500
        //             ? 
        //             (
        //                 <div className="w-full flex justify-between h-[4rem] pt-5 bg-white">
        //                     <div className="pl-5 w-2/5">
        //                         <i className="fa-solid fa-bars"></i>
        //                     </div>
        //                     <div className="w-2/5 text-center mr-5 pr-5">
        //                         {/* SWATCH */}
        //                         <img src={swatchlogo} alt='logo'/>
        //                     </div>
        //                     <div className="w-1/6">
        //                         <i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="pr-5 w-1/8">
        //                         <i className="fa-solid fa-bag-shopping"></i>
        //                     </div>
        //                 </div>
        //             )
        //             :
        //             (
        //                 <div className='w-screen bg-white h-[4rem] pt-5'>
        //                     <div className="flex justify-between">
        //                         <div className='w-1/12 pl-3'>
        //                             <img src={swatchlogo} alt='logo' style={{
        //                                 width: '10rem'
        //                             }}
        //                             className='cursor-pointer' />
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 New Arrivals
        //                             </a>
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 Watches
        //                             </a>
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 Gifts
        //                             </a>
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 Moonswatch
        //                             </a>
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 Customize
        //                             </a>
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 Our World
        //                             </a>
        //                         </div>
        //                         <div className="w-1/10">
        //                             <a className='hover:underline cursor-pointer'>
        //                                 Flik Flak
        //                             </a>
        //                         </div>
        //                         <div className="w-1/14">
        //                             <a className='cursor-pointer'>
        //                                 <i className="fa-solid fa-user"></i>
        //                             </a>
        //                         </div>
        //                         <div className="w-1/14">
        //                             <a className='cursor-pointer'>
        //                                 <i className="fa-solid fa-magnifying-glass"></i>
        //                             </a>
        //                         </div>
        //                         <div className="w-1/14">
        //                             <a className='cursor-pointer'>
        //                                 <i className="fa-solid fa-heart"></i>
        //                             </a>
        //                         </div>
        //                         <div className="w-1/14 pr-3">
        //                             <a className='cursor-pointer'>
        //                                 <i className="fa-solid fa-bag-shopping"></i>
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         }
        // </div>

        // PRACTICE

        // <header className='w-screen'>
		// 	<h3>LOGO</h3>
		// 	<nav ref={navRef}>
		// 		<a href="/#">Home</a>
		// 		<a href="/#">My work</a>
		// 		<a href="/#">Blog</a>
		// 		<a href="/#">About me</a>
		// 		<button
		// 			className="nav-btn nav-close-btn"
		// 			onClick={showNavbar}>
		// 			X
		// 		</button>
		// 	</nav>
		// 	<button
		// 		className="nav-btn"
		// 		onClick={showNavbar}>
		// 		O
		// 	</button>
		// </header>


        <header className='w-screen'>
			{/* <h3>LOGO</h3> */}
            <img src={swatchlogo} alt='logo' style={{
                    width: '10rem'
                }}
                className='cursor-pointer' />
			<nav ref={navRef} style={{ zIndex: '5' }}>
                {/* <img src={swatchlogo} alt='logo' style={{
                    width: '10rem'
                }}
                className='cursor-pointer' />
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a> */}

                <a className='hover:underline cursor-pointer py-3'>New Arrivals</a>
                <a className='hover:underline cursor-pointer py-3'>Watches</a>
                <a className='hover:underline cursor-pointer py-3'>Gifts</a>
                <a className='hover:underline cursor-pointer py-3'>Moonswatch</a>
                <a className='hover:underline cursor-pointer py-3'>Customize</a>
                <a className='hover:underline cursor-pointer py-3'>Our World</a>
                <a className='hover:underline cursor-pointer py-3'>Flik Flak</a>
                <a className='hover:underline cursor-pointer py-3'><i className="fa-solid fa-user"></i></a>
                <a className='hover:underline cursor-pointer py-3'><i className="fa-solid fa-magnifying-glass"></i></a>
                <a className='hover:underline cursor-pointer py-3'><i className="fa-solid fa-heart"></i></a>
                <a className='hover:underline cursor-pointer py-3'><i className="fa-solid fa-bag-shopping"></i></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					X
				</button>
			</nav>
			<div className='row'>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
		</header>

    )
}


