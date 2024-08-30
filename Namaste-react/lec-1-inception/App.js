
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello from react child1"),
        React.createElement("h2",{},"hello from react child2")]
    ),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello from react child3"),
        React.createElement("h2",{},"hello from react child4")]
    ));
    //jsx-to create tags and elements in js its very tediuos task to create Element
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
