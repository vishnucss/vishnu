---
title: Icons
description: 
position: 3
category: Extensions
---

Basic icons in SVG sprite for you to use on your site, we are using a pack <a href="https://www.ikonate.com/" title="Icons" target="_blank">ikonate</a><br />To use just use the <code>.icon</code> class in svg and import the icon using xlink:href, for example: <code>path-to-icon/icons.svg#icon-name</code> you can also use sizes, <code>.lg</code> for large and <code>.sm</code> for small</p>

<p>But before you start using it, you need to<a href="https://github.com/vishnucss/vishnu/blob/master/packages/vishnucss-icons/src/icons.svg" download>download the pack</a>then put it in the recommended folder for assets, static or use import directly node_modules<code>./node_modules/@vishnucss/icons/src/icons.svg#icon-name</code></p>

## Install

Add `@vishnucss/icons` dependency to your project:

<code-group>
  <code-block label="YARN" active>

  ```bash
  yarn add @vishnucss/icons
  ```

  </code-block>
  <code-block label="CDN">

  ```html
<link rel="stylesheet" href="https://unpkg.com/@vishnucss/icons"/>
  ```

  </code-block>
</code-group>
