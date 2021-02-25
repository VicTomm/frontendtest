#### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

A Pure Component prevents re-rendering, And The COmponent always will re-render even if you set the same value to a current state. So you need to choose carefully which kind of Component is needed, if you want to re-render things.

#### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

When we update the context, all the components that have a relation between, will re-render, and that can affect ShouldCOmponentUpdate in not working.

#### 3. Describe 3 ways to pass information from a component to its PARENT.

1. As a function parameter, eg:
   PARENT COMPONENT

   ```JS
   render(){
       ....
       <ChildComponent
       someFunc={(param) => {
            console.log(param)
        }}>
   }
   ```

   CHILD COMPONENT

   ```JS
   render(){
       ....
       <button onClick={(e) => this.props.someFunc(e)}>
   }
   ```

2. we can use redux, and modify the props accordingly so the Parent Component dispatchs an action from the Child Component.

3. you can also update context used in Parent and Child components from the Child

#### 4. Give 2 ways to prevent components from re-rendering.

Using a Pure Component, or using should `shouldComponentUpdate` comparing previos props with the new ones.

#### 5. What is a fragment and why do we need it? Give an example where it might break my app.

Is a a virtual dom element so we can return a single containing element, so when you need to return more than one element, we can create this virtual dom element to contain those, The Problem can result in breaking some styling.

#### 6. Give 3 examples of the HOC pattern.

Simple HOC function

```JS
const HOC = hoc(Component);

cons hoc = (Comp) => {
    return class extends React.Component {
        render(){
            return <Comp />
        }
    }
}
```

Redux connect function:

```JS
connect(mapStateToProps, mapDispatchToProps)(Component)
```

Pass not related props to Component

```JS
<Component {...props} />
```

#### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

Callbacks can chain functions (but you can fall into callback hell) since they are passed to other functions and can call them accordingly if you have a succes or an error.

You can chain a promise using `then` and handling the returned promise and also you can hanlde errors with a `catch`.

We can tell if our function is `async` (asynchronous) this resulting into defining that the function will always return a promise, then we can use `await` so we can tell the code, we should wait to that asynchronous function to be resolved.

#### 8. How many arguments does setState take and why is it async.

We can pass two arguments, an object and a callback, and it´s async so we can prevent re-renders.

#### 9. List the steps needed to migrate a Class to Function Component.

1. Create a function
2. Pass props as parameters
3. If using state replace constructor and state with useState hook
4. Replace any class methods and lifecycle methods with functions

#### 10. List a few ways styles can be used with components.

1. Using imports of .css files

2. Inline styles
```JS
<div style={{width: 100}} />
```

3. Using CSS inside JS

```JS
const container = {
    width: 100
}

<div style={container} />
```

#### 11. How to render an HTML string coming from the server.

Using dangerouslySetInnerHTML similar to innerHTML in the DOM
