import { Component } from "react";
import { Animated, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface AnimatedEllipsisProps {
    numberOfDots?: number; // Number of dots to display
    animationDelay?: number; // Delay between animations
    minOpacity?: number; // Minimum opacity of dots
    style?: StyleProp<ViewStyle | TextStyle>; // Styles for the dots
    useNativeDriver?: boolean; // Whether to use native driver for animations
}

export default class AnimatedEllipsis extends Component<AnimatedEllipsisProps> {
    static defaultProps: AnimatedEllipsisProps;

    initializeDots(): Animated.Value[]; // Initializes Animated.Value objects for dots

    componentDidMount(): void;

    componentWillUnmount(): void;

    animate_dots(which_dot: number): void;

    render(): JSX.Element;
}

//# sourceMappingURL=index.d.ts.map
