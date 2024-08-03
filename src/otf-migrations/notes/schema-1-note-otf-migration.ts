import { Injectable } from '@nestjs/common';
import { OtfMigration } from '../otf-migration';

@Injectable()
export class Schema1NoteOtfMigration extends OtfMigration {
  schemaTarget = 1;

  migrate(body: any): void {
    if (body.text) {
      body.title = body.text;
      delete body.text;
    }
  }
}
