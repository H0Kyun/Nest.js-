import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from 'src/boards/enum/board-status.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board')
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
