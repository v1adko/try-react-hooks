import React, { useRef, useEffect, useReducer } from 'react';
import './Stopwatch.css';

function useStopwatch(params) {
	function reducer(currentState, newState) {
		return { ...currentState, ...newState };
	}

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

	return { lapse, running, handleRunClick, handleClearClick };
}

function Stopwatch(props) {
	return <div>
		<label
			style={{
				fontSize: '5em',
				display: 'block'
			}}
		>
			{props.lapse}
			ms
		</label>
		<button onClick={props.handleRunClick}>
			{props.running ? 'Stop' : 'Start'}
		</button>
		<button onClick={props.handleClearClick}>Clear</button>
	</div>;
}

function Stopwatches() {
	const stopwatchOne = useStopwatch();
	const stopwatchTwo = useStopwatch();

	return (
		<div style={{ textAlign: 'center' }}>
			<Stopwatch {...stopwatchOne}/>
			<hr />
			<strong>Lapse Difference: </strong>
			<span>{stopwatchOne.lapse - stopwatchTwo.lapse}ms</span>
			<hr />
			<Stopwatch {...stopwatchTwo}/>
		</div>
	);
}

export default Stopwatches;
