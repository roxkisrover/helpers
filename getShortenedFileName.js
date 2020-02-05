export const getShortenedFileName = (fileName = '', maxSymbols = 23) => {
    if (fileName.length <= maxSymbols) {
        return fileName;
    }

    const chunks = fileName.split('.');
    const extension = chunks.length > 1 ? chunks[chunks.length - 1] : '';
    const endingLength = extension.length + 3; // extension + 3 dots
    const shortenedName = fileName.slice(0, maxSymbols - endingLength);

    return `${shortenedName}...${extension}`.trim();
};
