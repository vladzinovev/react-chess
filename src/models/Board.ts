import {Cell} from "./Cell";
import {Colors} from "./Colors";


export class Board {
  cells: Cell[][] = []

  //создание ячеек
  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK)) // Черные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE)) // белые
        }
      }
      this.cells.push(row);
    }
  }

}
