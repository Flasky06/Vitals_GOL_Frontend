import React from "react";

export const LinkTransparent = ({label, linkDirection}) => {
    return(
        <a className="link-transparent font-bold uppercase inline-block p-3 rounded-full" href={linkDirection}>{label}</a>
    )
}

export const LinkFilled = ({label, linkDirection}) => {
    return(
        <a className="link-filled font-bold uppercase inline-block p-3 rounded-full" href={linkDirection}>{label}</a>
    )
}