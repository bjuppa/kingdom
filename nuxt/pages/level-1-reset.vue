<template>
    <main class="space-inside">
        <h1>CSS Reset
            <small>Level 1</small>
        </h1>
        <p>
            The CSS reset is heavily inspired by other great projects like
            <a href="http://necolas.github.io/normalize.css/">Normalize</a>,
            <a href="http://tinyreset.surge.sh">Tinyreset</a>, and some parts from
            <a href="https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css">Tailwind</a>.
        </p>

        <h2>Colors</h2>
        <p>
            The reset utilises some basic colors.
            If not set beforehand in the <code>$colors</code> sass-map, the reset will generate these colors
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
        </table>
    </main>
</template>

<style lang="scss">
    @import "~assets/_variables.scss";
    @import "~assets/L1.scss";
</style>
