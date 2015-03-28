# accessibility-web
This is a small library to help improve the accessibility of web pages: use of ARIA roles and other helpers for accessibility.

The focus of the ARIA roles used on this first project will be on form elements: labels, inputs, tooltips, error messages etc.

The project is composed of:
  - HTML page with form elements;
  - Accessibility JS module which integrates small functions for different elements
  - Form styles 

The aria roles applied have been tested using Chromevox (http://www.chromevox.com/).

This library will be expanded in order to enrich the accessibility on form elements (see the list of elements to add at the bottom of this page). Any suggestions are welcome and I hope this can help quickly setup accessibility elements on forms.

## References

  - http://heydonworks.com/practical_aria_examples/ - by @heydonworks (https://twitter.com/heydonworks)
  - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA - ARIA documentation from MDN
  - https://github.com/btkerr/Starter-Form - by @btkerr (https://github.com/btkerr) 


## Basic rules

Some general rules we are applying for the forms and their elements:

  - Element (labels, inputs, tooltips) should have an 'id' for easy identification and referral;
  - hidden elements should have "inpage-hide" class (position: absolute; top: -9999em; left: -9999em;) so they can still be read by screen readers.




### form elements: input

### form elements: labels
ARIA-labeledby
 - this example helps identifying which label belongs to an input field. This proves very useful when using radio buttons in the same group that have a different label labeling them

### form elements: tooltips
ARIA-describedby ()
 - this example brings tooltips on focus using JS. Alternatively we could have placed the tooltip next to the input in order to use the adjacent sibling CSS selector (element + sibling).



### Things to add
 - required fields
 - checked and unchecked fields
 - alert messages


## Demo


## Live applications

N/A
