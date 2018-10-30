import { render, cleanup, fireEvent } from 'react-testing-library';
import React from 'react';
import Counter from './Counter';

describe('Counter', () => {
	afterEach(() => {
        window.localStorage.removeItem('count');
        cleanup();
	});

	it('incerements the counter', () => {
		const { container } = render(<Counter />);
		const button = container.firstChild;
		expect(button.textContent).toBe('0');
		fireEvent.click(button);
		expect(button.textContent).toBe('1');
	});

	it('reads value from localstorage', () => {
		window.localStorage.setItem('count', 3);
		const { container, rerender } = render(<Counter />);
		const button = container.firstChild;
		expect(button.textContent).toBe('3');
		fireEvent.click(button);
		expect(button.textContent).toBe('4');
		rerender(<Counter />);
		expect(window.localStorage.getItem('count')).toBe('4');
	});
});
