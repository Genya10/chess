import { Bishop } from './figures/Bishop';
import { Pawn } from './figures/Pawn';
import { Colors } from './Colors';
import { Cell } from "./Cell";
import { Queen } from './figures/Queen';
import { King } from './figures/King';

export class Board{
    cells: Cell[][]=[]

    public initCells(){
     for(let i = 0; i < 8; i++){
         const row: Cell[]=[]
         for(let j = 0; j < 8; j++){
            if((i+j) %2 !==0){
                row.push(new Cell(this,j,i,Colors.BLACK,null))//черные ячейки
             } else {
                row.push(new Cell(this,j,i,Colors.WHITE,null))//this-class Cell
             }
          }
          this.cells.push(row);
        }
    }

    public getCell(x:number,y:number){
        return this.cells[y][x]
    }

    private addKings(){
        new King(Colors.BLACK, this.getCell(4,0))
        new King(Colors.WHITE, this.getCell(4,7))
    }
    private addQueens(){
        new Queen(Colors.BLACK, this.getCell(3,0))
        new Queen(Colors.WHITE, this.getCell(3,7))       
    }
    private addBishops(){
        new Bishop(Colors.BLACK, this.getCell(2,0))
        new Bishop(Colors.WHITE, this.getCell(5,0)) 
        new Bishop(Colors.BLACK, this.getCell(2,7))
        new Bishop(Colors.WHITE, this.getCell(5,7)) 
    }
    private addPawns(){
        for(let i = 0; i < 8; i++){
          new Pawn(Colors.BLACK, this.getCell(i,1))
          new Pawn(Colors.WHITE, this.getCell(i,6))
        }
        
    }
    private addRooks(){
        
    }
    private addKnights(){
        
    }

    public addFigures(){
      this.addBishops()
      this.addKings()
      this.addKnights()
      this.addPawns()
      this.addRooks()
      this.addQueens()
      console.log('New-new')
    }
}