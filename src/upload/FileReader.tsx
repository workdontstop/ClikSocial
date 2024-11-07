export const readFileContent = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            const fileContent = event.target?.result as string;
            resolve(fileContent);
        };

        fileReader.onerror = (event) => {
            reject(event.target?.error);
        };

        fileReader.readAsText(file);
    });
};