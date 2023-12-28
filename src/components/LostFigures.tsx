import React,{FC} from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
    title:string;
    figures:Figure[]
}

export const LostFigures:FC<LostFiguresProps> = ({title,figures})=>{
    return(
        <div className="lost-figures">
          <h3>{title}</h3>
          {figures.map(figure =>
          <div className="name-figure-lost"
             key={figure.id}>
            {figure.name}
            {figure.logo && <img width={28} height={28} src={figure.logo}/>}
          </div>)
          }
        </div>
    )
}