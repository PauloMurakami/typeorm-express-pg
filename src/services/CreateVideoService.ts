import { AppDataSource } from "../db/dataSource";
import { Video } from "../entities/Video";

export class CreateVideoServce{
    async execute({name, description, duration, category_id}: VideoRequest){
        const videoRepository = AppDataSource.getRepository(Video);


    }
}