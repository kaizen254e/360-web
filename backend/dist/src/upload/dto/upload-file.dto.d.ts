export declare enum FileType {
    IMAGE = "image",
    VIDEO = "video"
}
export declare class UploadFileDto {
    type?: FileType;
    folder?: string;
    transformation?: string;
}
