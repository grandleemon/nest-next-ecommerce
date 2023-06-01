import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./category.model";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  getAll() {
    return this.categoryRepository.find();
  }

  create(dto: CreateCategoryDto) {
    const category = new Category();

    category.name = dto.name;
    category.slug = dto.name.toLowerCase().split(" ").join("-");

    return this.categoryRepository.save(category);
  }

  async update(id: number, dto: CreateCategoryDto) {
    const category = await this.categoryRepository.findOne({where: {id}})

    if(!category) return `Category with id: ${id} doesn't exist.`

    category.name = dto.name;
    category.slug = dto.name.toLowerCase().split(" ").join("-");

    return this.categoryRepository.save(category);
  }

  delete(id: number) {
    return this.categoryRepository.delete(id)
  }
}
