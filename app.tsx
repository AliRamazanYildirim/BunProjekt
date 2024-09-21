import test from "./test" //!normallerweise muss man erweiterung der datei schreiben aber mit bun muss man das nicht
import test2 from "./test2"
console.log(test, test2);
console.log(import.meta.dir);
console.log(import.meta.url);
console.log(import.meta.main);

//! bun build ./app.tsx --outdir ./build --> Dieser Befehl kompiliert die Datei app.tsx mit dem Bun-Tool und platziert die Ausgabe im Verzeichnis ./build.


//! bun build ./app.tsx --outfile test --compile --> Dieser Befehl kompiliert die Datei app.tsx und gibt sie in eine Datei namens test aus.

//"Bun" kullanimi