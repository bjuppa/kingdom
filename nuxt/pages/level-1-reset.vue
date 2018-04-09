<template>
    <main class="space-inside">
        <h1>
            <small>Level 1:</small>
            CSS Reset
        </h1>
        <p>
            The CSS reset in Kingdom is heavily inspired by other great projects like
            <a href="http://necolas.github.io/normalize.css/">Normalize</a>,
            <a href="http://tinyreset.surge.sh">Tinyreset</a>, and some parts from
            <a href="https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css">Tailwind</a>.
            This documentation aims to cover the resets used in Kingdom that are somewhat unique or opinionated.
            If you seek to understand all the resets included, please look through the source of
            <code>src/_L1-reset.scss</code>, where comments and links explain most of the individual parts.
        </p>
        <p>
            This webpage is displayed with just Level 1 and all utilities of Kingdom applied so you can quickly see its
            effects in your particular browser.
        </p>

        <h2>The <var>$colors</var> map</h2>
        <p>
            The reset utilises some basic colors.
            If not set beforehand in the <var>$colors</var> sass-map, the reset will generate these colors
            automatically and register them with the Kingdom colors module.
            Most of the colors have a matching text color to use on a colored background.
        </p>

        <ul>
            <li>
                <span class="background-color-primary">
                    The <code>primary</code> color used as background, together with its corresponding text color.
                </span>
            </li>
            <li>
                The <code>body</code> background color along with its text color can be seen everywhere on this page,
                but of course also here on this unstyled element.
            </li>
            <li>The <a href="#"><code>link</code> color</a> on the body background.</li>
            <li>
                <div class="border inline-block space-inside">
                    The <code>border</code> color defaults to <code>currentColor</code>.
                </div>
            </li>
        </ul>

        <h2>Boxes become their set size</h2>
        <p>
            To make any explicitly sized elements take up the specified space regardless of padding or borders,
            the <code>box-sizing</code> property of all elements is set to <code>border-box</code>.
            Read more about it in <a href="https://css-tricks.com/box-sizing/">this article on CSS-Tricks</a>.
        </p>
        <p style="max-width: 20em; border-right-width: 1em;">
            This paragraph is set to a maximum width and that width should include the border set on its side.
        </p>

        <h2>Add borders by setting a single property</h2>
        <p style="border-bottom-width: 1em">
            From <a href="https://tailwindcss.com/docs/border-width/">Tailwind</a> comes the nifty trick of setting
            explicit <code>border-style</code> and <code>border-color</code> on all block elements (plus images), while
            also defaulting the <code>border-width</code>&nbsp;to&nbsp;<code>0</code>.
            This makes it super convenient to just set the border width on any side of an element wherever a border is
            needed.
            This paragraph just has its <code>border-bottom-width</code> set... and voila!
        </p>

        <h2>Sass placeholders</h2>
        <p>
            The reset is also responsible for including all the Sass placeholders needed by Kingdom.
            Feel free to extend these placeholders whenever convenient in your own Sass.
            We use Sass placeholders to generate all kinds of extendable behaviour, but if they're not extended in any
            selector, they're also not present in the generated CSS.
            The placeholders generally have a CSS comment printed along with them, so you can find them all in your
            non-minified CSS.
        </p>
    </main>
</template>

<style lang="scss">
    @import "~assets/_variables.scss";
    @import "~assets/L1.scss";
</style>
