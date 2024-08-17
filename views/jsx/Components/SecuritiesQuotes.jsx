import React from "react";

export default function SecuritiesQuotes(props) {
    return (
        <div className="o-grid-row">
            <div data-o-grid-colspan="12">
                <div className="securities-quotes" role="region" aria-label={props.content.header}>
                    <ul className="securities-quotes-items o-typography-list">
                        {Array.isArray(props.content?.items) ? (
                            <>
                                {props.content.items.map((item, index) => (
                                    <li key={index}>
                                        {item.name}
                                        <span className={`${item.diff > 0 ? "up" : "down"}`}>
                             {item.diff.toFixed(2)}%
                            </span>
                                    </li>
                                ))}
                            </>
                        ) : (
                            <li>No Results</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}