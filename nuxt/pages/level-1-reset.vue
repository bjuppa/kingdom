<template>
    <main class="space-inside">
        <h1>
            <small>Level 1:</small>
            CSS Reset
        </h1>
        <p>
            The CSS reset is heavily inspired by other great projects like
            <a href="http://necolas.github.io/normalize.css/">Normalize</a>,
            <a href="http://tinyreset.surge.sh">Tinyreset</a>, and some parts from
            <a href="https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css">Tailwind</a>.
            This documentation aims to cover the bits that are somewhat unique or opinionated.
            If you seek to understand all the resets included, please look through the source in
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
            automatically and register them with the colors module.
            Most of the colors have a matching text color to use on a colored background.
        </p>
        <table>
            <caption>Colors</caption>
            <tr>
                <th>Primary color</th>
                <td><code>primary</code></td>
                <td><code>primary-text</code></td>
            </tr>
            <tr>
                <th>Body background</th>
                <td><code>body</code></td>
                <td><code>body-text</code></td>
            </tr>
            <tr>
                <th>Link color</th>
                <td><code>link</code></td>
            </tr>
            <tr>
                <th>Border color</th>
                <td><code>border</code></td>
            </tr>
        </table>

        <h2>CSS <code>box-sizing</code></h2>
        <p>
            The reset defaults the <code>box-sizing</code> property of all elements to <code>border-box</code>.
            Read more about it in <a href="https://css-tricks.com/box-sizing/">the article on CSS-Tricks</a>.
        </p>

        <h2>Borders</h2>
        <p>
            From <a href="https://tailwindcss.com/docs/border-width/">Tailwind</a> comes the nifty trick of setting
            explicit <code>border-style</code> and <code>border-color</code> on all block elements (plus images), while
            also defaulting the <code>border-width</code>&nbsp;to&nbsp;<code>0</code>.
            This makes it super convenient to just set the border width on any side of an element wherever a border is
            needed.
        </p>

        <h2></h2>
    </main>
</template>

<style lang="scss">
    @import "~assets/_variables.scss";
    @import "~assets/L1.scss";
</style>
