import { Request } from 'express';

export abstract class OtfMigration {
  abstract schemaTarget: number;

  abstract migrate(body: any): void;

  apply(request: Request) {
    const schema = request.body.schema ?? 0;
    if (schema < this.schemaTarget) {
      this.migrate(request.body);
    }
  }
}
