import { Body, Controller, Module, Post, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { IsOptional, IsString } from 'class-validator';

export class Note {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}

@Controller('/notes')
export class NotesController {
  @Post()
  createNote(@Body() note: Note) {
    console.log('Body', note);

    // Persist note to DB...
    return 'Ok';
  }
}

@Module({
  imports: [],
  controllers: [NotesController],
  providers: [],
})
export class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
