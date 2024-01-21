import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardDAO } from './boards.database';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardDAO],
})
export class BoardsModule {}
