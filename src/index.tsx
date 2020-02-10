import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const Product = ({ match }) => <h2>This is a page for product with ID: {match.params.id}</h2>
const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products/1">First Product</Link>
                    </li>
                    <li>
                        <Link to="/products/2">Second Product</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/products/:id" component={Product} />
        </div>
    </Router>
)

render(
    <>
        <App />
        <AppRouter />
    </>,
    document.getElementById("root")
);