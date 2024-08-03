import { Module } from '@nestjs/common';
import { NoteOtfMigrationsInterceptor } from './notes/note-otf-migrations.interceptor';
import { Schema1NoteOtfMigration } from './notes/schema-1-note-otf-migration';

@Module({
  providers: [NoteOtfMigrationsInterceptor, Schema1NoteOtfMigration],
  exports: [NoteOtfMigrationsInterceptor, Schema1NoteOtfMigration],
})
export class OtfMigrationsModule {}
