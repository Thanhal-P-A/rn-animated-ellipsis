export default class AnimatedEllipsis extends Component<any, any, any> {
    static propTypes: {
        numberOfDots: any;
        animationDelay: any;
        minOpacity: any;
        style: any;
        useNativeDriver: any;
    };
    static defaultProps: {
        numberOfDots: number;
        animationDelay: number;
        minOpacity: number;
        style: {
            color: string;
            fontSize: number;
        };
        useNativeDriver: boolean;
    };
    constructor(props: any);
    _animation_state: {
        dot_opacities: any[];
        target_opacity: number;
        should_animate: boolean;
    };
    initializeDots(): any[];
    componentDidMount(): void;
    componentWillUnmount(): void;
    animate_dots(which_dot: any): void;
    render(): JSX.Element;
}
import { Component } from "react";
//# sourceMappingURL=index.d.ts.map