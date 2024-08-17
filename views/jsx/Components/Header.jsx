import React from "react";

export default function Header(props) {

    return (
        <header className="o-typography-heading-level-1" role="banner" aria-label={props.content.header}>
            <div className="o-grid-row">
                <div data-o-grid-colspan="12">
                    {props.content.header}
                </div>
            </div>
        </header>
    );
}