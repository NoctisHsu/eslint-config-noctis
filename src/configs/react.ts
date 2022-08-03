const reactConfig = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['airbnb/hooks'],
    rules: {
        'jsx-a11y/anchor-has-content': [0],
        'jsx-a11y/click-events-have-key-events': [0],
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/no-static-element-interactions': [0],
        'react/destructuring-assignment': [1, 'always', { ignoreClassFields: true }],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-fragments': [2, 'element'],
        'react/jsx-props-no-spreading': [0],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': [2, { skipUndeclared: true }],
        'react/static-property-placement': 'off',
        'react/sort-comp': [
            1,
            {
                order: ['static-methods', 'everything-else', 'render', 'lifecycle'],
                groups: {
                    lifecycle: [
                        'getDefaultProps',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                },
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};

export default reactConfig;
