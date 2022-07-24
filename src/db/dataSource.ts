import { DataSource } from "typeorm"
import { CreateCategories1658692157819 } from "./migrations/1658692157819-CreateCategories"
import { CreateVideos1658692903506 } from "./migrations/1658692903506-CreateVideos"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "postgres",
    migrations: [CreateCategories1658692157819, CreateVideos1658692903506]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })