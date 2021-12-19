# simple-web-template
Simple Web Template provides a static, basic and simple HTML and CSS template for responsive web sites. 
The focus is on:

- Text-based web sites.
- Fast loading on different devices.
- Minimalistic and responsive design.


## CSS Breakpoints
For responsive design two navigation patterns are supported.

- navigation with links in the header menue
- navigation with hamburger menue.

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
/* smart phone size */ Note: at this breakpoint links are replaced by hamburger menue
@media (max-width: 800px)
...
/* iphone 5,SE */
@media (max-width: 320px) {
...
/* print view */
@media print 
...
```
## HTML Template
The HTML template consists of a navigation, content and footer section.

The following HTML content tags are supporded by default: 

```h1, h2, h3, a, p, ul (li), hr```. 

If you add ```target="_blank"``` links get an external mark at the end.

There is only a one column layout (class="col0") or two column layout (class="col1", class="col2").
Use clearflow (class="clearfl") after each layout section. 

```
<!-- navigation -->
<nav>
	<div class="head">
		<div class="logo"><a href="index.htm"><img src="images/logo.png" alt="Your Logo" /></a><span>Simple Web Template</span></div>
		<div id="mobile">≡</div>
		<div id="navi">
			<a href="index.htm" class="active">Home</a>
			<span>|</span>
			<a href="#">Link1</a>
			<span>|</span>
			<a href="#">Link2</a>
			<span>|</span>
			<a href="#">Link3</a>
		</div>
	</div>
</nav>
<!-- content -->
<div class="main" id="top">
	<div class="col0">
		<h1>First Heading - Single Column</h1>
	</div>
	<br class="clearfl" />
	<div class="col1">
		<h1>First Heading - Left Column</h1>
	</div>
	<div class="col2">
		<h1>First Heading - Right Column</h1>
	</div>
	<br class="clearfl" />
</div>
<!-- footer -->
<footer>
	<div>
		<p class="version">...</p>
		<p class="legal"><a href="#">Legal Stuff</a></p>
	</div>
</footer>
<br class="clearfl" />
...
```

