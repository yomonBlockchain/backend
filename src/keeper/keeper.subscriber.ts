import { Keeper } from '../entity';
import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';

export class KeeperSubscriber implements EntitySubscriberInterface<Keeper> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Keeper;
  }

  beforeInsert(event: InsertEvent<Keeper>) {
    console.log('BEFORE USER INSERTED', event.entity);
  }
}
