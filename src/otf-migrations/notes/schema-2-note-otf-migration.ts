import { Injectable } from '@nestjs/common';
import { OtfMigration } from '../otf-migration';

@Injectable()
export class Schema2NoteOtfMigration extends OtfMigration {
  schemaTarget = 2;

  protected apply(body: any): void {
    body.text = true;
  }
}
