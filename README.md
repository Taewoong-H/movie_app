# movie_app

Make a movie app with react.js and node.js

## learning steps!

1.  start `node.js` and `npm`. learn how to `npx` with `create-react-app`!
2.  learn `JSX` and `props`. sending component to html! And checking the props correctly delivered to component by `PropTypes`!!
3.  learn `state`. state is dynamic and controled by component. And learn about life cycle of method. like `componentDidMount()` or `componentWillUnmount()`.
4.  fetching API. Use `axios` instead of `fetch`. axios take a time for fetching API, so use async await(ES6).
5.  Set Movie component and get props from API
6.  learn how to add CSS style at `create-react-app`
7.  `deploy` my movie app to github page!
    - install `npm i gh-pages`
    - revise package.json. `"homepage" : "https://(GitHub ID).github.io/(Repository name)/"`
    - add script. `script : {"predeploy": "npm run build", "deploy": "gh-pages -d build"}`
    - write to console `npm run deploy`. Then "predeploy" start npm run build, next "deploy" start gh-pages -d build.
8.  create my page! https://taewoong-h.github.io/movie_app/

### Reference API

- https://yts.mx/api/v2/list_movies.json?sort_by=rating
