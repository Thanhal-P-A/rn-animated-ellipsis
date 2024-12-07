import React, { type PropsWithChildren, useEffect } from 'react';
import {
    Animated,
    type StyleProp,
    StyleSheet,
    type TextStyle,
    View,
} from 'react-native';

type Props = PropsWithChildren<{
    numberOfDots?: number;
    animationDelay?: number;
    minOpacity?: number;
    style?: StyleProp<TextStyle>;
    useNativeDriver?: boolean;
}>;

const initializeDots = (
    numberOfDots: number,
    minOpacity: number
): Animated.Value[] => {
    let opacities: Animated.Value[] = [];

    for (let i = 0; i < numberOfDots; i++) {
        let dot: Animated.Value = new Animated.Value(minOpacity);
        opacities.push(dot);
    }

    return opacities;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

const initialTargetOpacity: number = 1;

const defaultStyle: TextStyle = {
    color: '#aaa',
    fontSize: 32,
};

const AnimatedEllipsis: React.FC<Props> = ({
                                               numberOfDots = 3,
                                               animationDelay = 300,
                                               minOpacity = 0,
                                               style = defaultStyle,
                                               useNativeDriver = true,
                                           }: Props): React.JSX.Element => {
    const isMountedRef = React.useRef(true);
    const targetOpacityRef = React.useRef<number>(initialTargetOpacity);
    const dotOpacitiesRef = React.useRef<Animated.Value[]>(initializeDots(numberOfDots, minOpacity));

    const animateDots = React.useCallback(
        (currentDot: number): void => {
            if (!isMountedRef.current) return;

            if (currentDot >= dotOpacitiesRef.current.length) {
                currentDot = 0;
                targetOpacityRef.current = targetOpacityRef.current === minOpacity ? 1 : minOpacity;
            }

            const nextDot = currentDot + 1;

            Animated.timing(dotOpacitiesRef.current[currentDot]!, {
                toValue: targetOpacityRef.current,
                duration: animationDelay,
                useNativeDriver: useNativeDriver,
            }).start(() => animateDots(nextDot));
        },
        [
            animationDelay,
            useNativeDriver,
            minOpacity
        ]
    );

    useEffect(() => {
        isMountedRef.current = true;
        animateDots(0);

        return () => {
            isMountedRef.current = false;
        };
    }, [animateDots]);

    useEffect(() => {
        dotOpacitiesRef.current = initializeDots(numberOfDots, minOpacity);
    }, [numberOfDots, minOpacity]);

    return (
        <View style={styles.container}>
            {dotOpacitiesRef.current.map((opacity, index) => (
                <Animated.Text
                    key={index}
                    style={[style, { opacity: opacity }]}
                >
                    {' '}
                    .
                </Animated.Text>
            ))}
        </View>
    ) as React.JSX.Element;
};

export default AnimatedEllipsis;
