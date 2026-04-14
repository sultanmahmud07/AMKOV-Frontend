// utils/getFileSize.ts

export const getPdfSizeFromUrl = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    
    // Get the size in bytes
    const bytes = response.headers.get("content-length");
    
    if (!bytes) return "Unknown Size";

    const sizeInBytes = parseInt(bytes, 10);
    
    // Convert to KB or MB
    if (sizeInBytes < 1024 * 1024) {
      return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    } else {
      return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
    }
  } catch (error) {
    console.error("Error fetching file size:", error);
    return "Document";
  }
};