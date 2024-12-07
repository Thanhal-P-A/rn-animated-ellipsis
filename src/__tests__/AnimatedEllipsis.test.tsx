import { render } from '@testing-library/react-native';
import AnimatedEllipsis from '../AnimatedEllipsis';

test('renders the correct number of dots with default props', () => {
    const { getAllByText } = render(<AnimatedEllipsis />);
    const dots = getAllByText('.');
    expect(dots.length).toBe(3); // Default `numberOfDots` is 3
});
