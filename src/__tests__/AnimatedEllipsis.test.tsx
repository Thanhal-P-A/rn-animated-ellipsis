import { act, render } from '@testing-library/react-native';
import { Animated } from 'react-native';
import AnimatedEllipsis from '../AnimatedEllipsis';

test('renders the correct number of dots with default props', () => {
    const { getAllByText } = render(<AnimatedEllipsis />);
    const dots = getAllByText('.');
    expect(dots.length).toBe(3); // Default `numberOfDots` is 3
});

test('renders the correct number of dots with custom numberOfDots', () => {
    const { getAllByText } = render(<AnimatedEllipsis numberOfDots={5} />);
    const dots = getAllByText('.');
    expect(dots.length).toBe(5); // Custom `numberOfDots` is 5
});

test('applies custom styles to the dots', () => {
    const customStyle = { color: 'red', fontSize: 20 };
    const { getAllByText } = render(<AnimatedEllipsis style={customStyle} />);
    const dots = getAllByText('.');

    dots.forEach(dot => {
        expect(dot.props.style).toEqual(
            expect.objectContaining(customStyle)
        );
    });
});

test('triggers animations for each dot', () => {
    jest.useFakeTimers();

    const { getAllByText } = render(<AnimatedEllipsis numberOfDots={3} />);

    act(() => {
        jest.advanceTimersByTime(300 * 3); // Assuming animationDelay is 300ms
    });

    const dots = getAllByText('.');
    expect(dots.length).toBe(3);

    jest.useRealTimers();
});

test('uses custom animationDelay', () => {
    jest.useFakeTimers();

    const timingSpy = jest.spyOn(Animated, 'timing');

    render(<AnimatedEllipsis animationDelay={500} />);

    act(() => {
        // Advance timers to simulate animation
        jest.advanceTimersByTime(500);
    });

    expect(timingSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ duration: 500 })
    );

    jest.useRealTimers();
});

test('renders no dots when numberOfDots is 0', () => {
    const { queryAllByText } = render(<AnimatedEllipsis numberOfDots={0} />);
    const dots = queryAllByText('.');
    expect(dots.length).toBe(0); // No dots should be rendered
});

test('renders no dots when numberOfDots is negative', () => {
    const { queryAllByText } = render(<AnimatedEllipsis numberOfDots={-3} />);
    const dots = queryAllByText('.');
    expect(dots.length).toBe(0); // No dots should be rendered
});

test('applies minOpacity to dots', () => {
    const { getAllByText } = render(<AnimatedEllipsis minOpacity={0.5} />);
    const dots = getAllByText('.');

    dots.forEach(dot => {
        expect(dot.props.style).toEqual(
            expect.objectContaining({ opacity: 0.5 })
        );
    });
});

test('uses useNativeDriver when provided', () => {
    jest.useFakeTimers();
    const timingSpy = jest.spyOn(Animated, 'timing');

    render(<AnimatedEllipsis useNativeDriver={true} />);

    act(() => {
        jest.advanceTimersByTime(300);
    });

    expect(timingSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ useNativeDriver: true })
    );

    jest.useRealTimers();
    timingSpy.mockRestore(); // Cleanup the spy
});
