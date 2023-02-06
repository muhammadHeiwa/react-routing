import React from "react";
import MainLayouts from "../layouts/MainLayouts";

export default function Contact() {
    return(
        <MainLayouts>
            <div style={container}>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae veniam quis, eos eaque sint nobis ab pariatur. Corrupti impedit id nemo quidem ipsam numquam optio quos placeat quaerat quis. Tempora, ullam assumenda! Officiis obcaecati adipisci nesciunt repellat illo soluta recusandae quia! Cupiditate, dicta harum rem aliquid aut perspiciatis officia.</p>
            </div>
        </MainLayouts>
    )    
};

const container = {
    padding: "0 6rem"
}