import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  getAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
