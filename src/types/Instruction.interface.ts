export interface IInstruction {
    _id: string;
    name: string;
    slug?: string;
    thumbnail?: string; // Optional image
    pdfFile: string;    // Required PDF URL
}