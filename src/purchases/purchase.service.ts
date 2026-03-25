import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchaseService {
  private readonly fileName = 'purchases.json';

  findAll(): Purchase[] {
    const rawData = fs.readFileSync(this.fileName, 'utf8');
    return JSON.parse(rawData) as Purchase[];
  }
  findOne(id: string): void {
    const users = this.findAll();

    const user = users.find((u: Purchase) => u.id === u.id);
  }
}
