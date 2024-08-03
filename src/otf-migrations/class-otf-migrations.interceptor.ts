import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OtfMigration } from './otf-migration';

export abstract class ClassOtfMigrationsInterceptor implements NestInterceptor {
  abstract otfMigrations: OtfMigration[];

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    const sortedMigrations = this.otfMigrations.sort(
      (a, b) => a.schemaTarget - b.schemaTarget,
    );
    for (const migration of sortedMigrations) {
      migration.migrate(request);
    }

    return next.handle();
  }
}
