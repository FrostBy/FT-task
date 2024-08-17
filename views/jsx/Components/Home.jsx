import React from "react";
import SecuritiesQuotes from "./SecuritiesQuotes.jsx";
import Header from "./Header";
import Error from "./Error";

export default function Home(props) {
    return (
        <>
            <Header {...props} />
            <main>
                {!props.content.error ?
                    (<SecuritiesQuotes {...props} />)
                    :
                    (<Error {...props}/>)
                }
            </main>
        </>
    );
}
