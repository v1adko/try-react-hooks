import React, { useRef, useEffect, useReducer } from 'react';
import './Stopwatch.css';

function reducer(currentState, newState) {
	return { ...currentState, ...newState };
}

function Stopwatch() {
	const [ { running, lapse }, setState ] = useReducer(reducer, {
		running: false,
		lapse: 0
	});

	const intervalRef = useRef(null);

	useEffect(() => {
		return () => clearInterval(intervalRef.current);
	}, []);

	function handleRunClick() {
		if (running) {
			clearInterval(intervalRef.current);
		} else {
			const startTime = Date.now() - lapse;
			intervalRef.current = setInterval(() => {
				setState({
					lapse: Date.now() - startTime
				});
			}, 1);
		}
		setState({ running: !running });
	}

	function handleClearClick() {
		clearInterval(intervalRef.current);
		setState({ running: false, lapse: 0 });
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<label
				style={{
					fontSize: '5em',
					display: 'block'
				}}
			>
				{lapse}
				ms
			</label>
			<button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
			<button onClick={handleClearClick}>Clear</button>
		</div>
	);
}

export default Stopwatch;
