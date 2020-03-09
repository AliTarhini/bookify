export interface Book {
    id: string;
    volumeInfo: VolumeInfo
}

interface ImageLinks {
    thumbnail: string;
    smallThumbnail: string;
}

interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: ImageLinks;
}