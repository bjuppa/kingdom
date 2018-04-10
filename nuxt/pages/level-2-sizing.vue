<template>
    <main class="space-inside">
        <h1>
            <small>Level 2:</small>
            Spacing & Sizing
        </h1>
        <p>
            The 2nd level of Kingdom applies consistent text sizes, line heights, and spacing between blocks.
            The defaults include slightly larger text than browsers usually apply with a hefty line height for improved
            readability.
            The larger font sizes follow a modular scale with gradually smaller line heights as text get larger.
            Finally, the base spacing used throughout the rest of the CSS defaults to correspond to the line height of
            the body text, making paragraphs easy to distinguish from each other.
        </p>
        <p>
            This webpage is displayed with Level 2 and all utilities of Kingdom applied so you can quickly see its
            effects in your particular browser.
        </p>

        <h2>Spacing by <code>margin-top</code></h2>
        <p>
            The spacing scheme of Kingdom is based on resetting all margins to <code>0</code> and then applying <code>margin-top</code>
            to those elements that need space before them. So, <code>margin-bottom</code> should generally be kept at
            <code>0</code>, or negative values for some special use cases.
        </p>
        <h3>Use placeholders for spacing</h3>
        <p>
            There are plenty of Sass placeholders for you to extend that helps keeping the spacing consistent.
            If you're ever about to set <code>margin</code> or <code>padding</code> in your CSS, try to find a suitable
            placeholder first!
        </p>
        <p>
            Whenever you find that none of the placeholders fit the job, you can use the <var>$spacing-base</var> Sass
            variable or the <var>--spacing-base</var> CSS custom property.
        </p>
        <h3>Space elements from the <em>outside</em></h3>
        <p>
            Try to control margin on elements <em>from the outside</em>
            (using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators" target="_blank">
            CSS combinators</a>)
            whenever possible, and avoid having components set their own margins "on themselves".
            Spacing between elements should be seen as a <em>layout</em> concern, so its usually good to apply it in
            relation to children, descendants, and sibling elements.
        </p>
        <p>
            Padding on the other hand is a property that is intrinsic to an element or component itself, so feel free to
            apply it however you fancy. Keep in mind though that Kingdom provides plenty of handy placeholders,
            which will help in keeping all spacing consistent, for both margins and padding.
        </p>
        <h2>Default spacing between adjacent elements</h2>
        <p>
            After Kingdom has reset all margins to <code>0</code>, a default vertical spacing between any adjacent
            elements is added using the "lobotomized owl selector" <code>* + *</code>.
            This is of course inspired by
            <a href="https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/#layout"
               target="_blank">
                Heydon Pickering's technique
            </a>.
            So, any element that comes after another element will have the default spacing applied before it.
            That selector has very low specificity so can easily be overridden when needed, and that is just what
            Kingdom does next.
        </p>
        <h3>Keeping related elements close</h3>
        <p>
            There are some elements that are usually semantically related to their following elements, and it's a good
            idea to keep those siblings visually close together as well.
            This thinking is applied to heading and list item elements, so Kingdom will make sure the space between
            them and their next sibling is set to <code>0</code>.
        </p>
        <p>
            Some elements are meant to group other elements that are all closely related, so Kingdom will also make sure
            there's no vertical spacing between elements inside <code>table</code>, <code>figure</code>,
            <code>picture</code> and some other grouping elements.
        </p>
        <p>
            Spacing above
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"
               target="_blank">
                inline elements
            </a>
            would also mess up most designs, so their <code>margin-top</code> is also set to <code>0</code>.
        </p>
        <h2>Consistent text</h2>
        <p>
            To get rid of any browser quirks related to text sizes, Kingdom's 2nd level will make sure all elements
            inherit <code>font-size</code> and <code>line-height</code> from their parent by default.
            Then, those properties are specifically set on the <code>body</code>, the heading elements 1 to 6,
            as well as the inline elements <code>small</code>, <code>sub</code>, and <code>sup</code>.
        </p>
    </main>
</template>

<style lang="scss">
    @import "~assets/_variables.scss";
    @import "~assets/L2.scss";
</style>
