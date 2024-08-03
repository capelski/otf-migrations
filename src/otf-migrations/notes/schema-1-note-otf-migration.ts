import { Injectable } from '@nestjs/common';
import { OtfMigration } from '../otf-migration';

@Injectable()
export class Schema1NoteOtfMigration extends OtfMigration {
  schemaTarget = 1;

  protected apply(body: any): void {
    if (body.text) {
      body.title = body.text;
      delete body.text;
    }
  }
}
