---
title: Card
description:
position: 4
category: Extensions
---

Basic and Complet card to your widgets or components.

## Install

Add `@vishnucss/card` dependency to your project:

<code-group>
  <code-block label="YARN" active>

```bash
yarn add @vishnucss/card
```

  </code-block>
  <code-block label="CDN">

```html
<link rel="stylesheet" href="https://unpkg.com/@vishnucss/card" />
```

  </code-block>
</code-group>


## Usage

### Basic

<code-group>
  <code-block label="HTML" active>

```html
  <div class="card">
    <div class="card-content">
      Basic card
    </div>
  </div>
```

### With header and footer

```html
  <section class="panel">
    <header class="panel-header panel-icon-left panel-icon-right">
  
      <h2 class="panel-title">
        Panel title
      </h2>

      <div class="panel-header-left">
        <button type="button" class="button button-clear">
          <i class="icon-menu"></i>
        </button>
      </div>

      <div class="panel-header-right">
        <button type="button" class="button button-clear">
          <i class="icon-export"></i>
        </button>
        <button type="button" class="button button-clear">
          <i class="icon-cog-2"></i>
        </button>
      </div>

    </header>
    <div class="panel-content">
      Panel Content
    </div>
    <footer class="panel-footer">
      Panel Footer
    </footer>
  </section>
```
### Placeholder

```html
<div class="placeholder">Hello my friend !</div>
```

  </code-block>
</code-group>


