import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";

export class ListCategoryService{
    async execute() : Promise<Category[]>{
        const categoryRepository = AppDataSource.getRepository(Category);
        let result = await categoryRepository.find();
        return result;
    }
}