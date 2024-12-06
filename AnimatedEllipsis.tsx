import React, { PropsWithChildren, useEffect, useState, } from 'react';
import {
    Animated,
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';

type Props = PropsWithChildren<{
    numberOfDots?: number,
    animationDelay?: number,
    minOpacity?: number,
    style?: StyleProp<TextStyle | ViewStyle>,
    useNativeDriver?: boolean
}>;

interface AnimationState {
    dotOpacities: Animated.Value[];
    targetOpacity: number;
    shouldAnimate: boolean;
}

const initializeDots = (numberOfDots: number, minOpacity: number): Animated.Value[] => {
    let opacities: Animated.Value[] = [];

    for (let i = 0; i < numberOfDots; i++) {
        let dot: Animated.Value = new Animated.Value(minOpacity);
        opacities.push(dot);
    }

    return opacities;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

const AnimatedEllipsis: React.FC<Props> = ({
                                               numberOfDots = 3,
                                               animationDelay = 300,
                                               minOpacity = 0,
                                               style = {
                                                   color: '#aaa',
                                                   fontSize: 32,
                                               } as StyleProp<TextStyle | ViewStyle>,
                                               useNativeDriver = true
                                           }: Props) => {

    const [animationState, setAnimationState] =
        useState<AnimationState>(() => {
            return {
                dotOpacities: initializeDots(numberOfDots, minOpacity),
                targetOpacity: 1,
                shouldAnimate: true,
            }
        });

    useEffect(() => {
        animateDots(0);
        return () => {
            setAnimationState((previousState: AnimationState) => ({
                ...previousState,
                shouldAnimate: false,
            }));
        }
    }, []);

    const animateDots = (currentDot: number): void => {
        if (!animationState.shouldAnimate) return;

        // Swap fade direction when we hit the end of the list
        if (currentDot >= animationState.dotOpacities.length) {
            const oppositeOpacity = animationState.targetOpacity === minOpacity ? 1 : minOpacity;

            setAnimationState((previousState: AnimationState) => ({
                ...previousState,
                targetOpacity: oppositeOpacity,
            }));
        }

        const nextDot = currentDot + 1;

        Animated.timing(animationState.dotOpacities[currentDot], {
            toValue: animationState.targetOpacity,
            duration: animationDelay,
            useNativeDriver: useNativeDriver,
        }).start(() => animateDots(nextDot));
    }

    return (
        <View style={styles.container}>
            {animationState.dotOpacities.map((opacity, index) => (
                <Animated.Text key={index} style={[style, {opacity: opacity}]}>
                    {' '}
                    .
                </Animated.Text>
            ))}
        </View>
    );

}

export default AnimatedEllipsis;


