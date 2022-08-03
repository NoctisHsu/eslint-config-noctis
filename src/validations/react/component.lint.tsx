import React from 'react';

const FunctionComponent: React.FC<{ message: string }> = ({ message }) => <div>{message}</div>;

const ComponentWithHook = (): JSX.Element => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        // Update the document title to the current count
        document.title = `You clicked ${count} times`;

        // Cleanup the effect so that the document title is properly restored
        return (): void => {
            document.title = 'React TypeScript Hooks';
        };
    }, [count]);

    return (
        <div className="counter">
            <p>You clicked {count} times</p>
            <button type="button" onClick={(): void => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
