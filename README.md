# simple-web-template
Simple Web Template provides a static, basic and simple HTML and CSS template for responsive web sites. 
The focus is on:

- Text-based web sites.
- Fast loading on different devices.
- Minimalistic and responsive design.


##CSS Breakpoints
To support responsive design two navigation patterns are supported.
Navigation with links in the header menue and navigation with hamburger menue.
The navigation patterns are triggered by the following CSS breakpoints:

```
basic page settings - big screen size
...
/* laptop size */
@media (max-width: 1200px)
...
/* tablet size */
@media (max-width: 1020px)
...
/* smart phone size */ Note: at this breakpoint links are replace by hamburger menue
@media (max-width: 800px)
...
/* iphone 5,SE */
@media (max-width: 320px) {
	nav div.logo span	{font-size:24px;}
}
...
/* print view */
@media print 
...
```
