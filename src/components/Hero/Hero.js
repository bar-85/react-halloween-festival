import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import back from '../../assets/czarownica4.png'
import bat from '../../assets/bat2.png'
import house from '../../assets/house2.png'
import moon from '../../assets/moon.png'
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'
import { Wrapper } from './Hero.styles'
import Blur from '../Blur/Blur'


const Hero = () => {
	return (
		<div>
			<Wrapper>
				<Blur />	
				<div className='left-side'>
					<Header />
					<div className='up-title'>
						<motion.div animate={{ x: [8, 238, 8] }} transition={{ duration: 8, type: 'tween', repeat: Infinity }}></motion.div>
						<span>najlepsza impreza w mieście!</span>
					</div>

					<div className='medium-title'>
						<div>
							<span className='stroke-text'>Halloween</span>
						</div>
						<div>
							<span>Festiwal</span>
						</div>
					</div>

					<div className='festival-date'>
						<div>
							<span>
								<NumberCounter end={31} start={20} delay='1' />
							</span>
							<span>dzień</span>
						</div>
						<div>
							<span>
								<NumberCounter end={10} start={0} delay='1' />
							</span>
							<span>miesiąc</span>
						</div>
						<div>
							<span>
								<NumberCounter end={2023} start={2000} delay='50' />
							</span>
							<span>rok</span>
						</div>
					</div>
					<div className='hero-buttons'>
						<button className='btn'>Kontakt</button>
						<button className='btn'>Czytaj więcej</button>
					</div>
					<img src={house} alt='' className='house-image' />
				</div>
				<div className='right-side'>
				
					<button className='btn'>Kontakt</button>
					<img src={moon} alt='' className='moon-image' />
					<motion.div
						animate={{ y: [0, 10, 7, 15, 9, 12, 0] }}
						transition={{ duration: 5, type: 'tween', repeat: Infinity }}
						className='bat-image-motion'>
						<img src={bat} alt='' className='bat-image' />
					</motion.div>
					<motion.div animate={{ y: [0, 40, 0] }} transition={{ duration: 6, type: 'tween', repeat: Infinity }} className='back-image-motion'>
						<img src={back} alt='' className='back-image' />
					</motion.div>
				</div>
			</Wrapper>
			<section>
				<Footer />
			</section>
		</div>
	)
}

export default Hero
