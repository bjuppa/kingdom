# Kingdom

A CSS framework for consistent sizing, spacing and typography.

## Level 4—Baseline Rhythm
- Shift text in blocks down to their baseline using `position: relative`.
- Default to a font common to all browsers as the shift factor is font-specific.
- Have all elements inherit `font-family`.
- Use CSS vars to scope the line-height and shift factor.
- When setting `font-family`, also set `-—baseline-shift-factor` for use with `calc()`.

Defaults:
* `$baseline-font-family: Verdana, Geneva, sans-serif`
* `$baseline-shift-factor: ?` //TODO: calculate shift factor for Verdana
* `$baseline-shift-elements: p, blockquote, address, li, dt, dd, h1, h2, h3, h4, h5, h6`

Mixin for setting shift distance (wrapped in `@supports`):
```
position: relative;
top: calc((var(--line-height) - 1em * var(--baseline-shift-factor)) / 2);
```

Mixin for resetting shift distance (wrapped in same `@supports`):
```
position: initial;
top: initial;
```

Utility classes and mixins for baseline shift:
* `.baseline-shift`
* `.no-baseline-shift`


## Breakpoints


## Responsive locks


## Print


## Helpers
* Clearfix
* Strip unit (Sass)
