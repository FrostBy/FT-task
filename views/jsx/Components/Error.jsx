import React from "react";

export default function Error(props) {
    return (
        <div className="o-grid-row">
            <div data-o-grid-colspan="12">
                <div className="o-message o-message--error o-padding" role="alert" aria-label="Error">
                    <div className="o-message__container">
                        <div className="o-message__content">
                            <h2 className="o-message__title">Error</h2>
                            <p>{props.content.error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}