import { Injectable } from '@nestjs/common';
import { OtfMigration } from '../otf-migration';

/*
- Previous model:
 
  export class Note {
    text: string;
  }

- Current model:
 
  export class Note {
    title: string;
    description?: string;
  }
*/

@Injectable()
export class Schema1NoteOtfMigration extends OtfMigration {
  schemaTarget = 1;

  protected apply(body: any): void {
    body.title = body.text;
    delete body.text;
  }
}
