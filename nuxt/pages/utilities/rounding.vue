<template>
  <main class="space-inside paragraphs:w-readable">
    <h1>
      <small>Utilities:</small>
      Rounding
    </h1>
    <p>
      Element corners can be rounded using utilities from
      <a href="https://github.com/bjuppa/kingdom/blob/master/src/utilities/_rounding.scss"
        target="_blank"><code>src/utilities/_rounding.scss</code></a>.
      There are sizing suffixes <code>-sm</code>, <code>-lg</code> and <code>-1</code>,
      where the last one makes the rounding the size of one spacing unit.
      To turn a square into a circle or a rectangle into a pill shape, use <code>rounded-full</code>
      There's also the <code>rounded-none</code> that will remove rounded corners.
    </p>
    <p>
      All of the rounded-utilities can be combined with suffixes to only affect top, bottom, left & right corners.
    </p>

    <aside class="flex children:mt-1 children:space-horizontally w-readable text-center children:space-inside">
      <div class="rounded-sm background-color-gray-100 py-1">
        Small rounded corners with class <code>rounded-sm</code>
      </div>
      <div class="rounded background-color-gray-100 py-1">
        Medium rounded corners with class <code>rounded</code>
      </div>
      <div class="rounded-lg background-color-gray-100 py-1">
        Large rounded corners with class <code>rounded-lg</code>
      </div>
    </aside>

    <aside class="flex children:mt-1 children:space-horizontally w-readable text-center align-items-center justify-content-space-around ">
      <div class="rounded-1 background-color-gray-100 py-1 space-inside visualize-vertical-rhythm">
        Line-high radius with class <code>rounded-1</code>
      </div>
      <code class="rounded-full block h-4 w-4 flex-no-shrink background-color-gray-100 flex align-items-center">
        rounded-full
      </code>
      <code class="rounded-full block flex-no-shrink pt-1/2 px-1/2 background-color-gray-100">
        rounded-full
      </code>
    </aside>

    <aside class="w-readable">
      <ul class="list-unstyled children:mt-1">
        <li v-for="sizeSuffix in ['-sm', '', '-lg', '-1', '-full', '-none']" :class="'rounded'.concat(sizeSuffix)" class="background-color-gray-100 text-center py-1">
          <code>rounded{{ sizeSuffix }}</code>
          <ul class="list-inline mt-0 children:space-horizontally children:mt-1">
            <li v-for="positionSuffix in ['-t', '-b', '-l', '-r', '-tl', '-tr', '-bl', '-br']" :class="'rounded'.concat(positionSuffix, sizeSuffix)" class="background-color-body">
              <code class="px-1">rounded{{ positionSuffix }}{{ sizeSuffix }}</code>
            </li>
          </ul>
        </li>
      </ul>
    </aside>

  </main>
</template>

<script>
  import ReloadLink from '~/components/reload-link.vue';

  export default {
    components: {
      'reload-link': ReloadLink
    }
  };
</script>

<style lang="scss">
  @import "~assets/_variables.scss";
  @import "~assets/L3.scss";
</style>
