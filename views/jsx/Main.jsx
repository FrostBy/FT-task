import React from "react";
import Home from "./Components/Home";

export default function Main(props) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, intial-scale=1.0"/>
            <title>{props.pageTitle}</title>
            <link rel="stylesheet" type="text/css" href="/dist/css/styles.css"/>
            <script src="/dist/js/main.js" defer></script>
        </head>
        <body className="o-typography-body o-colors-page-background">
        <div id="root" className="o-typography-wrapper">
            <div className="o-grid-container">
                <Home {...props}></Home>
            </div>
        </div>
        </body>
        </html>
    );
}
