<div align="center">
<br>

</div>

<br>

<p align="center">
A Scalable Cross-Platform Desktop Apps based on  <a href="http://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/redux">Redux</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="http://webpack.github.io/docs/">Webpack</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a>.
</p>

<div align="center">
<br>
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
<img src="https://forthebadge.com/images/badges/made-with-javascript.svg" />
<img src="https://forthebadge.com/images/badges/for-you.svg" />
</div>

<br>

<div align="center">

<a href="https://facebook.github.io/react/"><img src="./internals/img/react-padded-90.png" /></a>
<a href="https://webpack.github.io/"><img src="./internals/img/webpack-padded-90.png" /></a>
<a href="http://redux.js.org/"><img src="./internals/img/redux-padded-90.png" /></a>
<a href="https://github.com/ReactTraining/react-router"><img src="./internals/img/react-router-padded-90.png" /></a>
<a href="https://flowtype.org/"><img src="./internals/img/flow-padded-90.png" /></a>
<a href="http://eslint.org/"><img src="./internals/img/eslint-padded-90.png" /></a>
<a href="https://facebook.github.io/jest/"><img src="./internals/img/jest-padded-90.png" /></a>
<a href="https://yarnpkg.com/"><img src="./internals/img/yarn-padded-90.png" /></a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2FstefanDeveloper%2Fbattle-counter?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FstefanDeveloper%2Fbattle-counter.svg?type=shield"/></a>

</div>

<hr>
<br>

<div align="center">

[![Github Tag][github-tag-image]][github-tag-url]
[![Good first issues open][good-first-issue-image]][good-first-issue-url]

</div>

## Install

- **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/stefanDeveloper/battle-counter/issues/400)**

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/stefanDeveloper/battle-counter.git your-project-name
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```

## Docs

See our [complete docs here](https://github.com/stefanDeveloper/battle-counter/wiki)

## Maintainers

- [Stefan Machmeier](https://github.com/stefanDeveloper)

## License

MIT © [Battle Counter](https://github.com/stefanDeveloper/battle-counter)

[github-tag-image]: https://img.shields.io/github/tag/stefanDeveloper/battle-counter.svg?label=version
[github-tag-url]: https://github.com/stefanDeveloper/battle-counter/releases/latest
[good-first-issue-image]: https://img.shields.io/github/issues/stefanDeveloper/battle-counter/good%20first%20issue.svg?label=good%20first%20issues
[good-first-issue-url]: https://github.com/stefanDeveloper/battle-counter/issues?q=is%3Aopen+is%3Aissue+label%3A"good+first+issue"


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FstefanDeveloper%2Fbattle-counter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FstefanDeveloper%2Fbattle-counter?ref=badge_large)