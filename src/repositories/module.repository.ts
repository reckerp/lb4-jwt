import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Module, ModuleRelations} from '../models';

export class ModuleRepository extends DefaultCrudRepository<
  Module,
  typeof Module.prototype.id,
  ModuleRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Module, dataSource);
  }
}
