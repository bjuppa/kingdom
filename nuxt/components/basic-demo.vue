<template>
  <div class="space-inside visualize-vertical-rhythm">
    <h1 class="color-primary">Heading 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <h2>Heading 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <h4>Heading 4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <h5>Heading 5</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <h6>Heading 6</h6>
    <p>
      Here's <reload-link to="" :append="true">some
      <small>small text</small>
      and <sub>sub text</sub>
      and <sup>sup text</sup>
      in a link.</reload-link>
      Here's <span class="text-small">a span with smaller text-size</span> inside.
    </p>

    <div><code>This is a block element with just code inside.</code></div>

    <p class="text-2-block">
      This is a&hellip;<br>
      text-2-block with <span class="text-1">text-1</span> inside
      and some more text to break lines
    </p>
    <hr>
    <p>
      This is a&hellip;<br>
      text-1-block with <span class="text-2">text-2</span> inside
      and some more text to break lines
    </p>
    <hr>
    <p class="text-1-block">
      This is a&hellip;<br>
      text-1-block with <span class="text-4">text-4</span> inside
      and some more text to break lines
    </p>
    <hr>

    <ul>
      <li>Normal list</li>
      <li>Item 2</li>
      <li>
        Sub-list
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </li>
      <li>Last item</li>
    </ul>

    <ul class="list-unstyled">
      <li>Unstyled&hellip;</li>
      <li>&hellip;list</li>
      <li>
        Sub-list
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </li>
    </ul>

    <ul class="list-inline space-children-horizontally">
      <li>Inline&hellip;</li>
      <li>&hellip;list</li>
    </ul>

    <ul class="list-comma-separated">
      <li>Comma</li>
      <li>separated</li>
      <li>list</li>
    </ul>

    <dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
      <dd>This is a second definition description for the same term.</dd>
      <dt>Malesuada porta</dt>
      <dt>A second term</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>

    <hr>

    <table>
      <caption>Simple table</caption>
      <tbody>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
        <th>Col 3</th>
      </tr>
      <tr>
        <th>Row 1</th>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
      <tr>
        <th>Row 2</th>
        <td>Data A</td>
        <td>Data B</td>
      </tr>
      </tbody>
    </table>

    <hr>

    <table class="border">
      <caption>Advanced table</caption>
      <colgroup>
        <col>
        <col>
      </colgroup>
      <thead>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>Row 1</th>
        <td>Data</td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <th colspan="2">2nd table body</th>
      </tr>
      <tr>
        <td>Data A</td>
        <td>Data B</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>Foot 1</td>
        <td>Foot 2</td>
      </tr>
      </tfoot>
    </table>

    <hr>

    <p class="text-6-block">
      Text-size&nbsp;6
    </p>
    <p class="text-5-block">
      Text-size&nbsp;5
    </p>

    <h2>This is a heading 2 that should be long enough to line break</h2>
    <hr>
    <h3>This is a heading 3 that should be long enough to line break</h3>
    <hr>
    <h4>This is a heading 4 that should be long enough to line break because it has more words</h4>
    <hr>
    <h5>This is a heading 5 that should be long enough to line break because it has more words</h5>
    <hr>

    <div class="h-1">Fixed height div</div>
    <hr>
    <p class="h-1">Fixed height paragraph</p>
    <hr>
    <div class="h-2 border space-inside">Fixed height bordered div</div>
    <hr>
    <p class="h-2 border space-inside">Fixed height bordered paragraph</p>
    <hr>
    <div class="border space-inside">Bordered div</div>
    <hr>
    <p class="border space-inside">Bordered paragraph</p>
    <hr>
    <div class="border space-inside float-left" style="max-width: 50%;">
      <p>Paragraph within a bordered floated div</p>
    </div>
    <p class="space-inside float-left" style="max-width: 50%;">Floated paragraph</p>
    <hr class="clear-both">
    <p class="underline">
      <span class=" float-right color-primary text-inherit underline">A floated element</span>
      A paragraph with a floated element inside
    </p>
    <hr class="clear-both">
    <div>
      <p class=" float-right color-primary underline">A floated paragraph</p>
      <p class="underline">
        A paragraph with a floated element outside
      </p>
    </div>
    <hr class="clear-both">

    <form onsubmit="return false;">
      <label for="input1">A label</label>
      <input id="input1" placeholder="input" size="4">
      <hr>
      <label><input type="checkbox">Checkbox A</label>
      <label><input type="checkbox">Checkbox B</label>
      <hr>
      <label><input type="radio" name="radio">Radio A</label>
      <label><input type="radio" name="radio">Radio B</label>
      <hr>
      <button>Button</button>

      <hr>

      <fieldset>
        <label for="fieldsetInput1">Label in fieldset</label>
        <input id="fieldsetInput1">
      </fieldset>
      <hr>
      <fieldset>
        <legend>Fieldset with a legend</legend>
        <label for="fieldsetInput2">Label in fieldset</label>
        <input id="fieldsetInput2">
      </fieldset>

      <fieldset class="border-0 p-0">
        <legend>Fieldset without border</legend>
        <label for="fieldsetInput3">Label in fieldset</label>
        <input id="fieldsetInput3">
      </fieldset>

      <hr>

      <select id="select1">
        <option>Select</option>
      </select>
      <hr>
      <select id="selectMultiple" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <optgroup label="Optgroup A">
          <option>Option A1</option>
          <option>Option A2</option>
        </optgroup>
        <option>Option 3</option>
      </select>

      <hr>

      <label for="textarea1">A label</label>
      <textarea id="textarea1" placeholder="Textarea"></textarea>
      <hr>
      <input type="button" value="Button input">
    </form>

    <hr>

    <form onsubmit="return false;">
      Inputs on a line
      <label for="input2">Label</label>
      <input id="input2" value="disabled" disabled>
      <input id="input3" value="readonly" readonly>
      <label for="select2">Label</label>
      <select id="select2" disabled>
        <option>Disabled</option>
      </select>
      <label><input type="checkbox" disabled>Disabled checkbox</label>
      <input type="button" value="Disabled button input" disabled>
      ...and some text after.
    </form>

    <hr>

  </div>

</template>

<script>
  import ReloadLink from '~/components/reload-link.vue';

  export default {
    components: {
      'reload-link': ReloadLink
    }
  };
</script>
