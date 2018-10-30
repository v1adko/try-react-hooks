import React, { useRef, useEffect, useReducer } from 'react';
import './Stopwatch.css';

function reducer(state, action) {
	switch (action.type) {
		case 'LAPSE':
			return {
				...state,
				lapse: action.now - action.startTime
			};

		case 'TOGGLE_RUNNING':
			return {
				...state,
				running: !state.running
			};

		case 'CLEAR':
			return {
				...state,
				running: false,
				lapse: 0
			};

		default:
			return state;
	}
}

function Stopwatch() {
	const [ { running, lapse }, dispatch ] = useReducer(reducer, {
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
				dispatch({ 
          type: 'LAPSE', 
          now: Date.now(),
          startTime
        });
			}, 1);
		}
		dispatch({ type: 'TOGGLE_RUNNING' });
	}

	function handleClearClick() {
		clearInterval(intervalRef.current);
		dispatch({ type: 'CLEAR' });
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
