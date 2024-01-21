import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { NotFoundException } from '@nestjs/common';
import { BoardDAO } from './boards.database';

@Injectable()
export class BoardsService {
  constructor(private boardsDAO: BoardDAO) {}

  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string) {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    // const { title, description, status } = createBoardDto;
    // const board: Board = {
    //   id: uuid(),
    //   title,
    //   description,
    //   status,
    // };

    return this.boardsDAO.createBoard(createBoardDto);
  }

  deleteBoard(id: string) {
    this.boards.filter((board) => board.id !== id);
  }

  updateBoardService(id: string) {
    const board = this.getBoardById(id);
    board.status =
      board.status == BoardStatus.PRIVATE
        ? BoardStatus.PUBLIC
        : BoardStatus.PRIVATE;
    return board;
  }
}
