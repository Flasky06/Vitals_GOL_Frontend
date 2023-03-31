import React from "react";

const TitleElement = ({subTitle, mainTitle}) => {
    return(
        <div>
            <h3 className="subtitle uppercase font-bold">{subTitle}</h3>
            <h2 className="maintitle capitalize font-bold">{mainTitle}</h2>
        </div>
    )
}

export default TitleElement;