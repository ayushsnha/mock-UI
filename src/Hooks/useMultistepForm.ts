import { ReactElement, useState } from 'react';

const useMultistepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () => {
        setCurrentStepIndex((prevIndex) => {
            if (prevIndex >= steps.length - 1) { return prevIndex; }
            return prevIndex + 1;
        });
    };

    const back = () => {
        setCurrentStepIndex((prevIndex) => {
            if (prevIndex <= 0) { return prevIndex; }
            return prevIndex - 1;
        });
    };

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex !== 0,
        isLastStep: currentStepIndex === steps.length - 1,
        next,
        back,
    };
};

export default useMultistepForm;
