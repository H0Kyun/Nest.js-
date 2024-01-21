import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../boards.model';
import { UsePipes } from '@nestjs/common';
import { BoardStatusValidationPipe } from '../pipe/board-status-validation.pipe';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: BoardStatus;
}
