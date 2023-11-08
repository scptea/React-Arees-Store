const fs = require('fs');
const path = require('path');

// Check command-line arguments
if (process.argv.length !== 4) {
    console.error('Usage: node filesystem.js <source directory> <target directory>');
    process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

// Read the source directory
fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
        console.error(`Error reading source directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extension (e.g., .pdf)
    const fileExtensionToCount = '.pdf';
    const matchingFiles = files.filter((file) => file.endsWith(fileExtensionToCount);

    matchingFiles.forEach((file) => {
        const sourceFilePath = path.join(sourceDirectory, file);
        const targetFilePath = path.join(targetDirectory, file);

        // Copy the matching file to the target directory
        fs.copyFile(sourceFilePath, targetFilePath, (err) => {
            if (!err) {
                console.log(`${file} has been copied to ${targetDirectory}`);
            } else {
                console.error(`Error copying ${file}: ${err}`);
            }
        });
    });
});
