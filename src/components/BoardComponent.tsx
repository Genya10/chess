import React, { FC,useState } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps{
    board:Board;
    setBoard:(board:Board) => void;
}

export const BoardComponent:FC<BoardProps> =({board,setBoard})=>{
   
    const[selectedCell,setSelectedCell] = useState<Cell | null>(null)

    function click(cell:Cell){
        if(cell.figure){
          setSelectedCell(cell);
        }      
    }

    return(
        <div className="board">
         {board.cells.map((row,index)=>
          <React.Fragment key={index}>
            {row.map(cell =>
             <CellComponent key={cell.id}
                            click={click}
                            cell={cell}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
          </React.Fragment>
         )}
        </div>
    )
}