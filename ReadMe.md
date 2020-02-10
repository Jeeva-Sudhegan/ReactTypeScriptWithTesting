Configuration steps for React + Typescript + Jest + React Testing Library from scratch

    1. Install React and ReactDOM
        npm i react react-dom
    2. Install Typescript and type definitions
        npm i typescript @types/react @types/react-dom
    3. Configure tsconfig.json file for typescript configurations
    4. Create files in .tsx extension
    5. Create scripts in package.json for converting tsx to js
        "build" : "tsc -p .",
        "watch" : "tsc -p . -w"
    6. Install webpack modules
        npm i --save-dev webpack-cli webpack ts-loader
    7. Configure webpack.config.js
    8. Install Jest 
        npm i --save-dev @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest
    9. Configure jest.config.js
    10. create test cases files under __tests__ directory
    11. Install react testing library for hooks
        npm i --save-dev @testing-library/react-hooks
    12. `Cannot find module 'react-test-renderer' from 'pure.js'` will occur due to the version conflict of react-test-renderer. Install it once again

BONUS:  Typescript with React Router

    1. Install React Router Dom and typescript config for it
        npm install --save react-router-dom @types/react-router-dom @types/node