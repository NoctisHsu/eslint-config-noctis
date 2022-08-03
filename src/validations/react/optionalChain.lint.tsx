/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type UserInfo = {
    basicInfo?: {
        name?: string;
    };
};

const App = (): JSX.Element => {
    const [count, setCount] = React.useState(0);
    const user: UserInfo = {
        basicInfo: {},
    };
    const userName = user?.basicInfo?.name;
    React.useEffect(() => {
        // Update the document title to the current count
        document.title = `${userName} clicked ${count} times`;

        // Cleanup the effect so that the document title is properly restored
        return (): void => {
            document.title = 'React TypeScript Hooks';
        };
    }, [count, userName]);

    return (
        <div className="counter">
            <p>You clicked {count} times</p>
            <button type="button" onClick={(): void => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
