export declare enum CategoryType {
    MAIN = "MAIN",
    MORE_LOGS = "MORE_LOGS",
    LINKABLES = "LINKABLES",
    TRANSFERS = "TRANSFERS"
}
export declare class CreateCategoryDto {
    name: string;
    slug: string;
    description?: string;
    type: CategoryType;
    parentId?: string;
    isActive?: boolean;
    order?: number;
}
