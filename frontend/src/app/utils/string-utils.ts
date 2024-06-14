export function extractFileExtension(fileName: string): string | undefined {
  if (!fileName) {
    return undefined;
  }
  if (fileName.indexOf('.') === -1) {
    return undefined;
  }
  return fileName.split('.').pop();
}
