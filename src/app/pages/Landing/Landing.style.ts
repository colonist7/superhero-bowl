import styled from 'styled-components';
import { vars } from '../../assets/variables';

export const LandingBase = styled.div`
	.logo {
		width: 250px;
		display: block;
		margin: 50px auto 100px;
	}

	.item {
		opacity: 0;
		transform: scale(0);
		transition: all 0.3s ease-in-out;
	}

	.thumb {
		text-align: center;
		display: block;
		text-decoration: none;
		margin: 0 auto 50px;
		border-radius: 10px;
		width: 250px;

		transition: all 0.2s ease-in-out;

		.image-wrapper {
			width: 200px;
			height: 200px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			overflow: hidden;
			position: relative;
			border: 5px solid #fff;
			border-radius: 50%;
			transition: all 0.3s ease-in-out;

			img {
				display: block;
				border-radius: 50%;
				padding: 5px;
				width: 100%;
				object-fit: cover;
				height: 100%;
			}
		}

		&:hover {
			transform: scale(1);

			.image-wrapper {
				border: 5px solid ${vars.colors.red};
			}
		}

		h4 {
			font-size: ${vars.fontSize.smallHeading};
			text-align: center;
			color: ${vars.colors.red};
			padding: 10px 0;
		}
	}
`;
