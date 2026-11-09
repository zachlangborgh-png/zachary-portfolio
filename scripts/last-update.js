// Run during HTML parsing only: write the document modification date.
const modifiedDate = new Date(document.lastModified);
document.write('Last Updated - ' + modifiedDate.toLocaleDateString('en-US'));
