---
title: Base
description:
position: 3
category: Guide
---

The base contains the minimum necessary, it is the heart of the vishnu. It consists of, <code>typography</code>, <code>colors</code>, <code>buttons</code>, <code>forms</code>, <code>tables</code>, <code>lists</code>.

## Install

Add `@vishnucss/base` dependency to your project:

<code-group>
  <code-block label="YARN" active>

```bash
yarn add @vishnucss/base
```

  </code-block>
  <code-block label="CDN">

```html
<link rel="stylesheet" href="https://unpkg.com/@vishnucss/base" />
```

  </code-block>
</code-group>

## Typography

Based on <code>rem</code> units. All <code>rem</code> units are
converted to base 10, so <code>1rem</code> is equal to
<code>10px</code>. By default, all headings, paragraphs, and code
use system fonts, using the most modern one available on a user's
operating system.

## Buttons

The Button, an essential part of any user experience. Buttons come in some basic styles: The <code>&lt;button&gt;Content&lt;/button&gt;</code> element has default color, whereas <code>.outline</code> has a simple outline around, <code>.flat</code> is entirely clear and <code>.rounded</code> is rounded border radius. The buttons also have states: <code>.success</code>, <code>.error</code>,<code>.warning</code> and <code>.info</code>

## Lists

The unordered list use ul element will be marked with a outline circles, the ordered list use ol element and your items will be marked with numbers, the description list use dl element and your items will not be marking, only spacings.

## Tables

The Table element represents data in two dimensions or more. We encourage the use of proper formatting with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> to create a <code>&lt;table&gt;</code>. The code becomes cleaner without disturbing understanding.

## Forms

All common form elements with basic, clean styles.

This is the base ... simple, isn't it? Let's go to the extensions
