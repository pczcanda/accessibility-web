# accessibility-web

[![Join the chat at https://gitter.im/pczcanda/accessibility-web](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pczcanda/accessibility-web?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a small library to help improve the accessibility of web pages: use of ARIA roles and other helpers for accessibility.

The focus of the ARIA roles used on this first project will be on form elements: labels, inputs, tooltips, error messages etc.

The project is composed of:
  - HTML page with form elements;
  - Accessibility JS module which integrates small functions for different elements
  - Form styles 

The aria roles applied have been tested using Chromevox (http://www.chromevox.com/).

This library will be expanded in order to enrich the accessibility on form elements (see the list of elements to add at the bottom of this page). Any suggestions are welcome and I hope this can help quickly setup accessibility elements on forms.


## Basic rules

Some general rules we are applying for the forms and their elements:

  - Element (labels, inputs, tooltips) should have an 'id' for easy identification and referral;
  - hidden elements should have "inpage-hide" class (position: absolute; top: -9999em; left: -9999em;) so they can still be read by screen readers.


## Aria Roles applied

Below is the list of what has been considered as the most important elements to add on Forms.

### form elements: input

### form elements: labels

#### aria-labeledby="labelID"
 - this example helps identifying which label belongs to an input field. This proves very useful when using group elements such as radio buttons or checkboxes that have a different label assigned to them (to show their value) but have a group label that is generally the description of the group.

```
  <div class="form-row clearfix not-validated">
    <div class="form-row-container">
      <div class="form-row-label">
        <label id="default-textfield-label" for="default-textfield">Default Text Field</label>
      </div>
      <div class="form-row-control" aria-labelledby="default-textfield-label">
        <div class="form-row-control--content">
          <input id="default-textfield" type="text" name="default-textfield">
          <div class="form-group-error">
            <p class="error-message" id="default-textfield-error">
              Default error message for default-textfield.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
```

### form elements: tooltips

#### aria-describedby="tooltipID"
 - this example assigns a tooltip to an input, using the tooltip's ID. There is a helper function that brings tooltips on focus using JS. Alternatively we could have placed the tooltip next to the input in order to use the adjacent sibling CSS selector (element + sibling).

```  
  <div class="form-row clearfix not-validated">
    <div class="form-row-container with-tooltip">
      <div class="form-row-label">
        <label id="default-textfield-label" for="default-textfield">Default Text Field</label>
      </div>
      <div class="form-row-control" aria-labelledby="default-textfield-label">
        <div class="form-row-control--content">
          <input id="default-textfield" type="text" name="default-textfield" aria-describedby="default-textfield-tip">
          <div class="form-group-error">
            <p class="error-message" id="default-textfield-error">Default error message for default-textfield.</p>
          </div>
        </div>
        <div class="form-row-tooltip">
          <div title="tooltip" class="tooltip">
            <p>
              <span class="helpMessage" id="default-textfield-tip" role="tooltip">
                Default tooltip message for default-textfield.                
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
```

### Things to add

This is a list of things to add in the near future
 - required fields
 - checked and unchecked fields
 - alert messages


## Demo


## References

  - http://heydonworks.com/practical_aria_examples/ - by [@heydonworks](https://twitter.com/heydonworks)
  - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA - ARIA documentation from MDN
  - https://github.com/btkerr/Starter-Form - by [@btkerr](https://github.com/btkerr) 


## In the wild

N/A
