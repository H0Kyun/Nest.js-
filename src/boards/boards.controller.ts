import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Get } from '@nestjs/common';
import { BoardStatus } from './enum/board-status.enum';
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
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBaordById(@Param('id') id: number) {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body(new BoardStatusValidationPipe()) createBoardDto: CreateBoardDto,
  ) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: number) {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id')
  updateBoardStatus(@Param('id') id: number) {
    this.boardsService.updateBoardService(id);
  }
}
