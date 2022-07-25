import { AppDataSource } from "../db/dataSource";
import { Video } from "../entities/Video";

export class CreateVideoServce{
    async execute({name, description, duration, category_id}: VideoRequest){
        const videoRepository = AppDataSource.getRepository(Video);
        if((await videoRepository.findOne({where: {name: name}}))){
            throw new Error("Video name being used!");
        }
        let video =  videoRepository.create({
            name: name,
            description: description,
            duration: duration,
            category_id: category_id
        })
        await videoRepository.save(video);

        return video
    }
}