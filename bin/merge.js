var fs = require('fs'),
    chunks = fs.readdirSync('./rec'),
    inputStream,
    currentfile,
    outputStream = fs.createWriteStream('./rec/merge.pcm');

chunks.sort((a, b) => { return a - b; });

function appendFiles() {
    if (!chunks.length) {
        outputStream.end(() => console.log('Fin.'));
        return;
    }

    currentfile = './rec/' + chunks.shift();
    inputStream = fs.createReadStream(currentfile);

    inputStream.pipe(outputStream, { end: false });

    inputStream.on('end', function() {
        console.log(currentfile + ' ENREGISTRER');
        appendFiles();
    });
}

appendFiles();