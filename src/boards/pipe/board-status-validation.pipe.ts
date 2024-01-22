import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../enum/board-status.enum';

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    const status = value.status.toUpperCase();

    if (!this.isStatusValid(status)) {
      throw new BadRequestException(`${status} is not valid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.StatusOptions.indexOf(status) !== -1;
  }
}
