import {Injectable} from '@nestjs/common'
import * as fs from 'fs';
import { Product } from './product.interface';


@Injectable()
export class ProductService {
    private readonly fileName = 'products.json';

    findAll(): Product[] { 
      const rawData = fs.readFileSync(this.fileName, 'utf8');
      return JSON.parse(rawData) as Product[]; 
    }
}