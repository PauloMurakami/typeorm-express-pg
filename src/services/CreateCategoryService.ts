import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";

export class CreateCategoryServce{
    async execute({name, description}:CategoryRequest): Promise<Category | Error>{
        const categoryRepository = AppDataSource.getRepository(Category);

        if(await categoryRepository.findOne({where: {name: name}})){
            throw new Error("Category alredy exists!");
        }

        let category = categoryRepository.create({
            name: name,
            description: description
        });
        await categoryRepository.save(category);
        return category;
    }
}