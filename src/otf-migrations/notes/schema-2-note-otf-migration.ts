import { Injectable } from '@nestjs/common';
import { OtfMigration } from '../otf-migration';

/*
- Previous model:
 
  export class Note {
    title: string;
    description?: string;
  }

- Current model:
 
  export class Note {
    title: string;
    description?: string;
    text: boolean;
  }
*/

@Injectable()
export class Schema2NoteOtfMigration extends OtfMigration {
  schemaTarget = 2;

  protected apply(body: any): void {
    body.text = true;
  }
}
