import React from "react";
import { Link } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

class Home extends React.Component{
    state = {
        skill: [
            {
                id: 1,
                name: "Javascript",
                description: "Javascript Description",
                image: require("../images/js.png")
            },
            {
                id: 2,
                name: "React",
                description: "React Description",
                image: require("../images/react.png")
            },
            {
                id: 3,
                name: "Vue",
                description: "Vue Description",
                image: require("../images/vuejs.jpeg")
            },
            {
                id: 4,
                name: "Svelte",
                description: "Svelte Description",
                image: require("../images/sveltejs.png")
            }
        ]
    }
    render(){
        const { skill } = this.state;
        return(
            <MainLayouts>
                <h1 style={{ paddingLeft: "6rem" }}>Homepage</h1>
                <div style={container}>
                    {skill.map(item =>
                        <div key={item.id} style={card}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt={item.name} style={img} />
                                <h3>{item.name}</h3>
                            </Link>
                        </div>
                    )}
                </div>
            </MainLayouts>
        )
    }
}

export default Home;

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
}