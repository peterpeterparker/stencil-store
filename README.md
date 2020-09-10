# @stencil/store for Angular

This repo is a fork of the [@stencil/store](https://github.com/ionic-team/stencil-store).

Stencil Store is a lightweight shared state library by the [StencilJS](https://stenciljs.com/) core team. It implements a simple key/value map that efficiently re-renders components when necessary.

## Table of contents

- [Goal](#goal)
- [Difference with original project](#difference-with-original-project)
- [Blog post](#blog-post)
- [Documentation](#documentation)
- [Questions and observations](#questions-and-observations)

## Goal

Experiment the possibility to use a simple state management in Angular apps without absolutely any RxJs dependencies.

## Difference with original project

The Stencil Store can't be currently used out of the box in an Angular app. The Stencil Core dependency won't compile if installed in such an app.

In case of Angular, this depdency is actually not needed as it has to do with the Stencil (apps, components etc.) rendering.

Therefore, the dependency and related code has been removed from this repo.

In addition, because it only has a demo purpose, the bundle (`dist`) has been added.

## Blog Post

Angular: A Simple State Management Without RxJS (An Experiment) - TODO

## Documentation

Check out the [@stencil/store](https://github.com/ionic-team/stencil-store) repo for more information and documentation.

## Questions and observations

Reach me out on [Twitter](https://twitter.com/daviddalbusco).
