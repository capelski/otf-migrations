import {
  Body,
  Controller,
  Module,
  Post,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { OtfMigrationsModule } from './otf-migrations/otf-migrations.module';
import { NoteOtfMigrationsInterceptor } from './otf-migrations/notes/note-otf-migrations.interceptor';

export class VersionedEntity {
  @IsNumber()
  @IsOptional()
  schema?: number;
}

export class Note extends VersionedEntity {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}

@Controller('/notes')
export class NotesController {
  @Post()
  @UseInterceptors(NoteOtfMigrationsInterceptor)
  createNote(@Body() note: Note) {
    console.log('Body', note);

    // Persist note to DB...
    return 'Ok';
  }
}

@Module({
  imports: [OtfMigrationsModule],
  controllers: [NotesController],
  providers: [],
})
export class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
