import { createRef, useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks';
import { imageURLBuilder } from '../../utils/imageURLBuilder';
import { useFetch } from './hooks/hooks';
import { LandingBase } from './Landing.style';
import logo from '../../assets/images/logo.png';

export interface LandingProps {}

export const Landing = ({}: LandingProps) => {
	const { content } = useAppSelector((state) => state.catalogReducer);
	const [elRefs, setElRefs] = useState([]);
	useFetch();

	useEffect(() => {
		if (!!content) {
			let arrLength = content.length;
			setElRefs((elRefs) =>
				Array(arrLength)
					.fill(' ')
					.map((item, i) => elRefs[i] || createRef())
			);
		}
	}, [content]);

	useEffect(() => {
		if (elRefs && elRefs.length > 0) {
			elRefs.map((x, i) => {
				return setTimeout(() => {
					//@ts-ignore
					x.current.style.opacity = 1;
					//@ts-ignore
					x.current.style.transform = 'scale(1)';
				}, 100 * i);
			});
		}
	}, [elRefs]);

	return (
		<LandingBase>
			<Image className='logo' src={logo} />
			<Container>
				<Row>
					{content.map((item, i) => (
						<Col className='item' ref={elRefs[i]} lg={4} md={4} sm={6} xs={12}>
							<Link to={'/' + item.id} className='thumb'>
								<div className='image-wrapper'>
									<Image
										src={imageURLBuilder(
											item.thumbnail.path,
											item.thumbnail.extension,
											item.thumbnail.size
										)}
									/>
								</div>
								<h4>{item.name}</h4>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</LandingBase>
	);
};
