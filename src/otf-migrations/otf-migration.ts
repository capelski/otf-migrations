import { Request } from 'express';

export abstract class OtfMigration {
  abstract readonly schemaTarget: number;

  protected abstract apply(body: any): void;

  migrate(request: Request) {
    const schema = request.body.schema ?? 0;
    if (schema < this.schemaTarget) {
      this.apply(request.body);
      request.body.schema = this.schemaTarget;
    }
  }
}
