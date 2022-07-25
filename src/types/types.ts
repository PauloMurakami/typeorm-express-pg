type CategoryRequest = {
    name: string,
    description: string
}
type CategoryUpdateRequest = {
    id: string,
    name: string,
    description: string
}
type VideoRequest = {
    name: string,
    description: string,
    duration: number,
    category_id: string,
}