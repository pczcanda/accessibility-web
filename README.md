# accessibility-web
This is a small library to help improve the accessibility of web pages: use of ARIA roles and other helpers for accessibility.


## rules

Some general rules we are applying for the forms and their elements:

  - Element (labels, inputs, tooltips) should have an id for easy identification and referral;
  - hidden elements should have "inpage-hide" class (position: absolute; top: -9999em; left: -9999em;) so they can still be read by screen readers




### form elements: input

### form elements: labels
ARIA-labeledby
 - this example helps identifying which label belongs to an input field. This proves very useful when using radio buttons in the same group that have a different label labeling them

### form elements: tooltips
ARIA-describedby ()
 - this example brings tooltips on focus using JS. Alternatively we could have placed the tooltip next to the input in order to use the adjacent sibling CSS selector (element + sibling).



### things to add
 - required fields
 - checked and unchecked fields
 - alert messages
