import React, { FC,useState,useEffect } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps{
    board:Board;
    setBoard:(board:Board) => void;
    currentPlayer:Player | null | undefined;
    swapPlayer:()=>void;
}

export const BoardComponent:FC<BoardProps> =({board,setBoard,currentPlayer,swapPlayer})=>{
  
    const[selectedCell,setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell){
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
            updateBoard();
        }else{
            if(cell.figure?.color === currentPlayer?.color)
            setSelectedCell(cell);
        }       
    }

    useEffect(()=>{
        highlightCells()
    }, [selectedCell])

    function highlightCells(){
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard(){
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return(
        <div>
        <h2 className="board-title">Текущий игрок : {currentPlayer?.color}</h2>
        <div className="board">
         {board.cells.map((row,index)=>
          <React.Fragment key={index}>
            {row.map(cell =>
             <CellComponent 
                    key={cell.id}
                    click={click}
                    cell={cell}
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
          </React.Fragment>
         )}
        </div>
        </div>
    )
}