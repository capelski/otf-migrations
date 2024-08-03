import { Module, Provider } from '@nestjs/common';
import { NoteOtfMigrationsInterceptor } from './notes/note-otf-migrations.interceptor';
import { Schema1NoteOtfMigration } from './notes/schema-1-note-otf-migration';
import { Schema2NoteOtfMigration } from './notes/schema-2-note-otf-migration';

export const providers: Provider[] = [
  NoteOtfMigrationsInterceptor,
  Schema1NoteOtfMigration,
  Schema2NoteOtfMigration,
];

@Module({
  providers,
  exports: providers,
})
export class OtfMigrationsModule {}
