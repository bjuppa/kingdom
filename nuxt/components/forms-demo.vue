<template>
  <div class="space-inside visualize-vertical-rhythm">
    <form>
      <label for="input1">Label for input 1</label>
      <input id="input1" type="text" aria-describedby="input1description">
      <span id="input1description">Pretty long field description/instruction that cover multiple lines</span>

      <div>
        <label for="input2" class="invalid">"Wrapped", invalid form control</label>
        <div>
          <input id="input2" type="text" aria-describedby="input2errors" aria-invalid="true">
          <span id="input2errors">This is an error message</span>
        </div>
      </div>

      <fieldset class="py-0">
        <legend>A fieldset with legend and no vertical padding</legend>
        <label><input type="checkbox">Checkbox in label</label>
        <label><input type="checkbox" required>Required checkbox in label with a rather long text</label>

        <label><input type="radio" name="radio">Radio A</label>
        <label><input type="radio" name="radio">Radio B</label>

        <input type="checkbox" id="checkboxA"><label for="checkboxA">Checkbox with adjacent label</label>
        <input type="checkbox" id="checkboxB" required><label for="checkboxB">Required checkbox with adjacent
        label</label>
      </fieldset>

      <label for="textarea1">Label for textarea 1</label>
      <textarea id="textarea1"></textarea>

      <label for="select1">Label for select 1</label>
      <select id="select1">
        <option>Option 1</option>
        <option>Option 2</option>
        <optgroup label="Optgroup A">
          <option>Option A1</option>
          <option>Option A2</option>
        </optgroup>
        <option>Option 3</option>
      </select>

      <label for="select2">Label for multiple select</label>
      <select id="select2" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <optgroup label="Optgroup A">
          <option>Option A1</option>
          <option>Option A2</option>
        </optgroup>
        <option>Option 3</option>
      </select>

      <label for="input3">Label for input 3</label>
      <input id="input3" required placeholder="required input" aria-describedby="input3description">
      <small id="input3description">Field description/instructions</small>

      <button type="submit">Submit button</button>

    </form>

    <hr class="h-px">

    <form class="form-inline children:space-horizontally children:mt-1 mt-0" onsubmit="return false;">
      <button class="button-prime">Prime button</button>
      <button class="button-plain">Plain button</button>
      <button class="button-petty">Petty button</button>
      <button class="button-large">Large button</button>

      <button class="button-prime button-destructive">Prime destructive button</button>
      <button class="button-plain button-destructive">Plain destructive button</button>
      <button class="button-petty button-destructive">Petty destructive button</button>

      <reload-link to="" :append="true" class="button-prime">Prime button link</reload-link>
      <reload-link to="" :append="true" class="button-plain">Plain button link</reload-link>
      <reload-link to="" :append="true" class="button-petty">Petty button link</reload-link>
      <reload-link to="" :append="true">Unstyled link</reload-link>

      <button class="button-prime" disabled>Prime disabled button</button>
      <button class="button-plain" disabled>Plain disabled button</button>
      <button class="button-petty" disabled>Petty disabled button</button>
    </form>

    <hr class="h-px">

    <form class="form-inline" onsubmit="return false;">
      <input type="text" disabled value="disabled">
      text
      <input readonly value="readonly">

      <textarea disabled>disabled</textarea>
      <textarea readonly>readonly</textarea>

      <label class="disabled"><input type="checkbox" disabled>Disabled checkbox in label</label>
      <input type="checkbox" disabled id="checkboxC"><label for="checkboxC">Checkbox with adjacent label C</label>

      <select disabled>
        <option>Option 1</option>
        <option>Option 2</option>
        <optgroup label="Optgroup A">
          <option>Option A1</option>
          <option>Option A2</option>
        </optgroup>
        <option>Option 3</option>
      </select>

      <select multiple disabled>
        <option>Option 1</option>
        <option>Option 2</option>
        <optgroup label="Optgroup A">
          <option>Option A1</option>
          <option>Option A2</option>
        </optgroup>
        <option>Option 3</option>
      </select>

      <button>Button</button>
    </form>

    <hr class="h-px">

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
