<template>
    <main class="space-inside">
        <h1>
            <small>Level 3:</small>
            Vertical Rhythm
        </h1>
        <p>
            To achieve a consistent vertical rhythm,
            where every line of text and every block line up nicely across columns,
            the height of every element should be a multiple of the same base.
            Kingdom's 3rd level helps you achieve this by carefully fitting font-sizes with line-heights
            that are such multiples.
        </p>
        <p>
            The absolute line-height of the body text will be equal to the vertical rhythm base, whereas the line-height
            of a larger heading element could be two multiples, or more, of the vertical rhythm base.
            Because blocks of text take up the height of all their lines combined, the block itself will also be a
            multiple of the vertical rhythm base.
        </p>
        <p>
            This webpage is displayed with Level 3 and all utilities of Kingdom applied so you can quickly see its
            effects in your particular browser.
        </p>

        <h2>Elements that need special care to fit</h2>
        <p>
            Most elements will just fit right into the vertical rhythm when they inherit the <code>line-height</code>
            from their parents, but some need a little extra attention by Kingdom to fit in.
        </p>

        <h3>Borders</h3>
        <p>
            Whenever you add a top or bottom border to a block of text,
            its height will no longer be a multiple of the line-height.
            Kingdom's borders module provide mixins that help shifting the element slightly up using relative
            positioning, and applying appropriate negative margin in combination with the border.
        </p>
        <p>
            For most cases it's easiest to just extend your class with the border placeholders
            or use the border utility classes directly on your elements.
        </p>

        <h3>Thematic breaks</h3>
        <p>
            To make <code>hr</code> elements take up one "line" in the vertical flow, Kingdom gives them a fixed height
            along with a negative <code>margin-bottom</code> of the same amount to move the adjacent sibling closer.
        </p>

        <h3>Form elements</h3>
        <p>
            Form inputs, buttons, <code>fieldset</code>, and <code>legend</code> have their paddings adjusted (usually
            to <code>0</code>).
            The form elements that should take up exactly one line have their line-height decreased to fit the top and
            bottom borders within the vertical rhythm base, and the bordered multi-line elements <code>textarea</code>,
            <code>fieldset</code>, and multi-selects are shifted slightly upwards, using the border module.
        </p>
    </main>
</template>

<style lang="scss">
    @import "~assets/_variables.scss";
    @import "~assets/L3.scss";
</style>
