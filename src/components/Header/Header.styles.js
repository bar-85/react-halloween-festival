import styled from 'styled-components'

export const SocialIcon = styled.div`
	display: inline-block;
	margin-left: 14px;

	a {
		width: 42px;
		height: 42px;
		background: rgba(217, 217, 217, 0.1);
		display: inline-flex;
		border-radius: 50%;
		margin-right: 6px;
		align-items: center;
		justify-content: center;
		line-height: 1;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
	a::before {
		content: '';
		width: 42px;
		height: 42px;
		position: absolute;
		background-color: rgba(255, 166, 0, 0.227);
		border-radius: 50%;
		transform: scale(0);
		transition: 0.3s ease-in-out;
	}
	a:hover::before {
		transform: scale(1);
	}
	a img {
		width: 40%;
		z-index: 1;
		transition: 0.3s ease-in-out;
	}
	a:hover img {
		filter: brightness(0%) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
	}

	@media screen and (max-width: 900px) {
		margin-top: 2rem;
	}
`

export const Hamburger = styled.div`
	display: none;

	@media screen and (max-width: 900px) {
		position: fixed;
		right: 1rem;
		display: block;
		margin-top: 1rem;
		z-index: 20;
	}
`
