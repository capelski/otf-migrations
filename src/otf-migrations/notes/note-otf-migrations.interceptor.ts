import { Injectable } from '@nestjs/common';
import { ClassOtfMigrationsInterceptor } from '../class-otf-migrations.interceptor';
import { Schema1NoteOtfMigration } from './schema-1-note-otf-migration';
import { Schema2NoteOtfMigration } from './schema-2-note-otf-migration';

@Injectable()
export class NoteOtfMigrationsInterceptor extends ClassOtfMigrationsInterceptor {
  constructor(
    protected schema1NoteOtfMigration: Schema1NoteOtfMigration,
    protected schema2NoteOtfMigration: Schema2NoteOtfMigration,
  ) {
    super([schema1NoteOtfMigration, schema2NoteOtfMigration]);
  }
}
