# Laying the foundation

## React element

It is an object. When the element renders on the DOM it becomes the html element.

```js
React.createElement("h1", {id: "heading"}, "hello world from react!");
```

root.render(heading)

converts the reactelement into the html element and put in the DOM.

> Creating a React element with React.createelement() is hard so we use JSX to create it.

# JSX

JSX is HTML like syntax used in javascript.

``` JS
const jsxHeading= <h1>hello world using jsx</h1>;
```

If JSX in multiple lines surround with (),

Here jsxHeading is the react element, which is equivalent with creating using React.createElement().

> JSX is transpiled into JS(react element) by babel.

## React components

### Functional component

its a normal JS function, which return JSX (react element).

``` JS
const HeadingComponent = () => {
    return (
        <h1 className="head" tabIndex="6">
          hello world using jsx
        </h1>
      );
}
```

 Can write JS code inside JSX, need to enclose in {}.

 ```JS

 let number= 1000;
 (
    <div>
        {number + 2000}
        <h1 className="head" tabIndex="6">
            hello world using jsx
        </h1>
    </div>
    
);
```

Component can be rendered as below

```JS
{HeadingComponent()}
<HeadingComponent />
<HeadingComponent></HeadingComponent>
```


