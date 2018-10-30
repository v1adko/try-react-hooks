import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import VanillaTilt from 'vanilla-tilt';
import './Tilt.css';

function Tilt(props) {
	const tiltRef = useRef();

	useEffect(() => {
		VanillaTilt.init(tiltRef.current, {
			max: 25,
			speed: 400,
			glare: true,
			'max-glare': 0.5
		});
		return () => tiltRef.current.vanillaTilt.destroy();
	}, []);

	return (
		<div ref={tiltRef} className="tilt-root">
			<div className="tilt-child">{props.children}</div>
		</div>
	);
}

Tilt.propTypes = {
	children: PropTypes.any
};

export default Tilt;
