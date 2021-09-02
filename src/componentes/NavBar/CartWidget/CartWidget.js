import React from "react";

import { FaCartArrowDown } from "react-icons/fa";

export const CartWidget = ({cantidad=0}) => {


    return (
        <div className="CartWidget">
            <FaCartArrowDown />
            <span>{ cantidad }</span>
        </div>

    )

}


// import { FaCartArrowDow } from "react-icons/fa"
