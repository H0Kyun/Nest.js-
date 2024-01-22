import { Injectable } from '@nestjs/common';
import { BoardStatus } from './enum/board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getAllBoards() {
    return await this.boardRepository.find();
  }

  getBoardById(id: number) {
    const found = this.boardRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException('없음');
    }
    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto) {
    const board = this.boardRepository.create({
      title: createBoardDto.title,
      description: createBoardDto.description,
      status: createBoardDto.status,
    });

    return await this.boardRepository
      .save(board)
      .then((board) => board)
      .catch((e) => {
        throw new BadRequestException();
      });
  }

  deleteBoard(id: number) {
    this.boardRepository.delete(id);
  }

  updateBoardService(id: number) {
    const board = this.getBoardById(id);
    // board.status =
    //   board.status == BoardStatus.PRIVATE
    //     ? BoardStatus.PUBLIC
    //     : BoardStatus.PRIVATE;
    return board;
  }
}
