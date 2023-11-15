# CSS Selectors

These are some common CSS selectors.

<!-- SNIPPETS START -->

## element selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Type (element) selectors
    * Targets all <p> elements.
    */
			p {
				color: tomato;
			}
		</style>
	</head>
	<body>
		<p>Lorem ipsum dolor sit amet.</p>
	</body>
</html>
```

## class selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/**	Class selectors
     * Targets elements with "info" class.
     */
			.info {
				color: blue;
			}
		</style>
	</head>
	<body>
		<p class="info">I am blue because I have the <code>info</code> class</p>
		<p>I wont be like that</p>
	</body>
</html>
```

## id selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** ID selector
     * targets element with "unique" id.
     */
			#unique {
				color: green;
			}
		</style>
	</head>
	<body>
		<p id="unique">I will be green because I'm unique</p>
	</body>
</html>
```

## attribute selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Attribute selector
     * Targets input fields with type attribute "text".
     */
			input[type="text"] {
				width: 400px;
			}
		</style>
	</head>
	<body>
		<input type="text" value="I will be 400px wide" />
		<br />
		<input type="email" value="i-wont-be-that-wide@me.com" />
	</body>
</html>
```

## pseudo class-selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Pseudo-class selector
     * Targets anchor tag on hover state.
     */
			a:hover {
				color: orange;
			}
		</style>
	</head>
	<body>
		<a href="#">Lorem ipsum dolor sit amet</a>
	</body>
</html>
```

## pseudo element-selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Pseudo-element selector
     * Targets first line of p element
     */
			p::first-line {
				color: red;
			}
		</style>
	</head>
	<body>
		<p>Lorem ipsum dolor sit amet.</p>
	</body>
</html>
```

## child selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Child selector
     * Targets span elements that are direct children of div elements.
     */
			div > span {
				color: blue;
			}
		</style>
	</head>
	<body>
		<div>
			<span>I will be blue</span>
			<p><span>I wont be blue</span></p>
		</div>
	</body>
</html>
```

## descendant selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Descendant selector
     * Targets span elements that are descendants of div elements.
     */
			div span {
				color: red;
			}
		</style>
	</head>
	<body>
		<div>
			<p>
				<span
					>I will be read because somewhere up the tree is a
					<code>div</code>.</span
				>
			</p>
		</div>
		<p><span>I wont be like that</span></p>
	</body>
</html>
```

## adjacent sibling-selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Adjacent sibling selector
     * Targets p element that directly follows h1 element.
     */
			h1 + p {
				color: blue;
			}
		</style>
	</head>
	<body>
		<h1>Title</h1>
		<p>I will be blue</p>
		<p>I won't</p>
	</body>
</html>
```

## general sibling-selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** General sibling selector
    * Targets all p elements that are siblings of h1.
    */
			h1 ~ p {
				color: blue;
			}
		</style>
	</head>
	<body>
		<h1>Title</h1>
		<span>Other Tag</span>
		<p>This will be blue.</p>
		<div><p>This wont be blue</p></div>
	</body>
</html>
```

## universal selector:

```html
<!doctype html>
<html lang="en">
	<head>
		<style>
			/** Universal selector
     * Targets all elements on the page.
     */
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				color: tomato;
			}
		</style>
	</head>
	<body>
		<p>Every one will be affected.</p>
	</body>
</html>
```

<!-- SNIPPETS END --><!-- SNIPPETS END --><!-- SNIPPETS END --><!-- SNIPPETS END --><!-- SNIPPETS END --><!-- SNIPPETS END -->
