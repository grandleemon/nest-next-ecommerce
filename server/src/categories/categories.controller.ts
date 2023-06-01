import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post, Put
} from '@nestjs/common';
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll() {
    return await this.categoriesService.getAll();
  }

  @Post()
  async create(@Body() dto: CreateCategoryDto) {
    return await this.categoriesService.create(dto);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() dto: CreateCategoryDto) {
    return await this.categoriesService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return await this.categoriesService.delete(id);
  }
}
