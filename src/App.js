import React, { Component } from 'react';
import Counter from './suspense/UseStateWithEffect/Counter';
import Tilt from './suspense/UseRef/Tilt';
import Stopwatch from './suspense/UseReducer/Stopwatch';
import StopwatchWithReducer from './suspense/UseReducer/Stopwatch.withReducer';
import StopwatchWithSimpleReducer from './suspense/UseReducer/Stopwatch.withSimpleReducer';
import StopwatchWithSharedLogic from './suspense/UseReducer/Stopwatch.withSharedLogic';
import Memo from './suspense/Memo/Memo';
import Lazy from './suspense/Lazy/Lazy';
import Pokemon from './suspense/Suspense/Pokemon';

class App extends Component {
	render() {
		return (
			<div>
				<h4>1. useState + useEffects (localStorage)</h4>
				<Counter />
				<hr />

				<h4>2. useRef + cleanup</h4>
				<Tilt />
				<hr />

				<h4>3. useState + useEffects (localStorage)</h4>
				<Stopwatch />

				<h4>4. useReducer</h4>
				<StopwatchWithReducer />

				<h4>5. useReducer (simplified)</h4>
				<StopwatchWithSimpleReducer />

				<h4>6. Shared complex logic</h4>
				<StopwatchWithSharedLogic />

        <h4>7. React.memo</h4>
				<Memo />

        <h4>8. React.lazy</h4>
				<Lazy />

        <h4>9. Suspense + caching</h4>
				<Pokemon />
			</div>
		);
	}
}

export default App;
