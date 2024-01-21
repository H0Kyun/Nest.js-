import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Get } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { BoardStatusValidationPipe } from './pipe/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBaordById(@Param('id') id: string) {
    console.log(id);
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body(new BoardStatusValidationPipe()) createBoardDto: CreateBoardDto,
  ) {
    console.log(createBoardDto);
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string) {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id')
  updateBoardStatus(@Param('id') id: string) {
    this.boardsService.updateBoardService(id);
  }
}
