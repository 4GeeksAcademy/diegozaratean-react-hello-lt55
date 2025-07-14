import React from "react";

const Card = (props)=>{
    console.log(props)

    return(
        <div className="card" style={{width: "18rem", backgroundColor: props.fondo } }>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">soy {props.profesion} y mi pareja es {props.pareja}</p>
                <a href="#" className="btn btn-primary">Go {props.edad}</a>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card