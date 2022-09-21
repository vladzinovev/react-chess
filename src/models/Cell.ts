import {Colors} from "./Colors";
import {Board} from "./Board";

//класс ячеек
export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  board: Board;
  available: boolean; // Можешь ли переместиться
  id: number; // Для реакт ключей

  constructor(board: Board, x: number, y: number, color: Colors) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.available = false;
    this.id = Math.random()
  }

}
