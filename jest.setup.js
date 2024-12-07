import '@testing-library/jest-native/extend-expect';

// Mock Native Animated Helper
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock Animated.timing
jest.mock('react-native/Libraries/Animated/Animated', () => {
    const ActualAnimated = jest.requireActual('react-native/Libraries/Animated/Animated');
    return {
        ...ActualAnimated,
        timing: jest.fn().mockReturnValue({
            start: jest.fn(),
        }),
    };
});

// Enable Jest Fake Timers
jest.useFakeTimers();

// Clear timers after each test
afterEach(() => {
    jest.clearAllTimers();
});
