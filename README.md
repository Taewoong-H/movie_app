# movie_app

Make a movie app with react.js and node.js

## learning steps!

1.  Start `node.js` and `npm`. Learn how to `npx` with `create-react-app`!
2.  Learn `JSX` and `props`. sending component to html! And checking the props correctly delivered to component by `PropTypes`!!
3.  Learn `state`. State is dynamic and controled by component. And learn about life cycle of method like `componentDidMount()` or `componentWillUnmount()`.
4.  Fetching API. Use `axios` instead of `fetch`. Axios take a time for fetching API, so use async await(ES6).
5.  Set Movie component and get props from API
6.  Learn how to add CSS style at `create-react-app`
7.  `deploy` my movie app to github page!
    - install `npm i gh-pages`
    - revise package.json. `"homepage" : "https://(GitHub ID).github.io/(Repository name)/"`
    - add script. `script : {"predeploy": "npm run build", "deploy": "gh-pages -d build"}`
    - write to console `npm run deploy`. Then "predeploy" start npm run build, next "deploy" start gh-pages -d build.
8.  Create my page! https://taewoong-h.github.io/movie_app/
9.  Learn react-router-dom! Separate folder "component" and "routes". Import router at App.js. When URL's are common at "/", then use `exact={true}`.
10. Made navigation with `Link` which is instead of `a` tag. Distribute Home and About page. Home page is movie_page and About page is composed with Tronald Dump which is Trump's dumbest thinking...
11. Share props between Routes. Took a `to` props in Link which has "pathname" and "state" etc.. And made Detail page.

### Reference API

- movie data : https://yts.mx/api/v2/list_movies.json?sort_by=rating
- made About page with tronald Dump API : https://www.tronalddump.io/
