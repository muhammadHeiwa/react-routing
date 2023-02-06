import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

// class Detail extends React.Component{
//     state = {
//         skill: [
//             {
//                 id: 1,
//                 name: "Javascript",
//                 description: "Javascript Description",
//                 image: require("../images/js.png")
//             },
//             {
//                 id: 2,
//                 name: "React",
//                 description: "React Description",
//                 image: require("../images/react.png")
//             },
//             {
//                 id: 3,
//                 name: "Vue",
//                 description: "Vue Description",
//                 image: require("../images/vuejs.jpeg")
//             },
//             {
//                 id: 4,
//                 name: "Svelte",
//                 description: "Svelte Description",
//                 image: require("../images/sveltejs.png")
//             }
//         ]
//     }

//     componentDidMount(){
//         const { id } = useParams()
//     }
//     render(){
//         return(
//             <MainLayouts>
//                 <h1>Detail Page</h1>
//             </MainLayouts>
//         )
//     }
// }

// export default Detail;

export default function Detail() {
    const [skill, setSkill] = useState([
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
    ]);

    const { id } = useParams()
    const [data, setData] = useState(skill.find(item => item.id === parseInt(id)));
    console.log(data);

    return(
        <MainLayouts>
            <div style={container}>
                <h1>{data.name}</h1>
                <div style={box}>
                    <img src={data.image} alt={data.image} style={image} />
                    <div>
                        <p>{data.description}</p>
                        <Link to="/">Back Home</Link>
                    </div>
                </div>
            </div>
        </MainLayouts>
        
    )
};

const container = {
    padding: "0 6rem",
}

const image = {
    width: "15rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex",

}