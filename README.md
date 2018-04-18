# Kingdom

A CSS framework for consistent sizing, spacing and typography.

## Level 2—Sizing and Spacing
- Horizontal spacing is controlled with `margin-top`.
- Keep `margin-bottom` at `0`.
- Control margin on elements *from the outside* (using CSS combinators) so that elements don’t set their own spacing.

Defaults:
* `$spacing-base: 1em`

Reset `margin` on all elements to `0` using universal selector (`*`).

Set `margin-top` to `$spacing-base` using adjacent sibling combinator (`* + *`) for default horizontal spacing.

Remove vertical spacing from:
* all elements after `h1`-`h6`/`dt`/`li`/`hgroup`/`script`/`template`/`map`/`input[type=hidden]`
* last-child `script`/`template`/`map`/`input[type=hidden]`
* `textarea`/`select` after `label`
* `input` after `label` where input's `type` is not `button`|`reset`|`submit`

Remove all vertical spacing inside:
* `figure`
* `picture`
* `object`
* `select`
* `table`
* `audio`
* `video`
* `map`

Utility classes and mixins for cancelling out default vertical spacing (`margin-top: 0`):
* `.no-vertical-spacing`
* `.no-vertical-spacing-on-children` using child combinator (`> *`)
* `.no-vertical-spacing-within` using descendant combinator (` *`)
* `.no-vertical-spacing-after` using adjacent sibling combinator (`+ *`)


## Level 3—Vertical Rhythm
- Avoid setting font-size on `:root` (assume `16px`).
- Set `font-size` and `line-height` on `body` — this line-height becomes the *vertical rhythm base*.
- Have all elements inherit `font-size` and `line-height`.
- Whenever `line-height` is set, also set `—line-height` for use with `calc()`.
- Specifically set `font-size` and the corresponding `line-height` on headings and other elements with differing text sizes.

Use `1rem`=`1em`=`16px` as a base for conversions.

Function for converting `font-size` from `px`/`percentage`/`factor`/`em` to `rem` and from `rem`/`percentage`/`factor`/`em` to `px`.

Function for converting length values from `px`/`em` to `rem`.

### How to come up with a modular scale?
Make `$font-size-5=2*$body-leading/$min-line-height-factor` (for `h2` to fill 2 rows)

Make `$modular-scale = pow($font-size-N/$font-size-1, 1/(N-1))`

Example modular scale: ((2*2/1,2)/(2/1,5))^(1/(5-1)) = 1,257…

Defaults:
* `$body-line-height-factor: 1.5`
* `$min-line-height-factor: 1.2`
* `$desired-body-font-size: 18px`
* `$modular-scale: 1.257`

Make `$body-leading = (round($desired-body-font-size*$body-line-height-factor)/16px) rem`

Make `$vertical-rhythm-base = $body-leading`

Make `$spacing-base = $vertical-rhythm-base`

Mixin for calculating `font-size` from a desired number of `$lines` and a desired `$line-height-factor`:
```
$lines*$vertical-rhythm-base/$line-height-factor
```

Mixin for calculating `line-height` from a `font-size`:
```
ceil(font-size*$min-line-height-factor/$vertical-rhythm-base)*$vertical-rhythm-base`
```

Mixins for fitting element `height` to nearest multiple of the vertical rhythm base:
* From `em/rem/px`
* From `vh/vw` (`%=vh`)

Every `$font-size-N` should have a corresponding `$line-height-N`.

Make `$font-size-1` = `$body-leading/$body-line-height-factor`

Make `$font-size-N` = `$font-size-(N-1)*$modular-scale`

Utility classes and mixins for text sizes:
* `.text-1` to `.text-6` setting `font-size` and `line-height`.
* `.text-body` is alias for `.text-1`.
* `.text-small` setting `font-size` to a percentage.
* `.text-inherit` inheriting `font-size` and `line-height` from parent.

Apply font-sizes to elements:
* `$font-size-6`: `h1`
* `$font-size-5`: `h2`
* `$font-size-4`: `h3`
* `$font-size-3`: `h4`
* `$font-size-2`: `h5`

Set `hr` height to `0` to fit vertical rhythm.

Utility classes setting vertical margins, padding, or borders should be adapted to the vertical rhythm (or removed).
Adding negative margin to the bottom is recommended if there is no padding to adjust.


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
