import { Injectable } from '@nestjs/common';
import { ClassOtfMigrationsInterceptor } from '../class-otf-migrations.interceptor';
import { OtfMigration } from '../otf-migration';
import { Schema1NoteOtfMigration } from './schema-1-note-otf-migration';

@Injectable()
export class NoteOtfMigrationsInterceptor extends ClassOtfMigrationsInterceptor {
  otfMigrations: OtfMigration[];

  constructor(protected titleMigration: Schema1NoteOtfMigration) {
    super();
    this.otfMigrations = [titleMigration];
  }
}
