# Bun

Bun ist ein schneller Paketmanager, Test-Runner und JavaScript-Laufzeitumgebung für JavaScript- und TypeScript-Projekte.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install foobar.

```bash
curl -fsSL https://bun.sh/install | bash
bun install
```

## Usage

```javascript
import test from "./test" //!normallerweise muss man erweiterung der datei schreiben aber mit bun muss man das nicht
import test2 from "./test2"
console.log(test, test2);
console.log(import.meta.dir);
console.log(import.meta.url);
console.log(import.meta.main);
```

Hier sind einige grundlegende Anwendungsbereiche von Bun:

1. **Paketverwaltung**: Bun kann als Alternative zu npm und yarn verwendet werden, um Pakete schnell zu installieren, zu aktualisieren und zu verwalten.

   ```bash
   bun install
   ```

2. **JavaScript-Laufzeitumgebung**: Bun kann als Alternative zu Node.js verwendet werden, um JavaScript-Code auszuführen.

   ```bash
   bun run index.js
   ```

3. **Test-Runner**: Bun bietet einen schnellen und effizienten Test-Runner für JavaScript- und TypeScript-Projekte.

   ```bash
   bun test
   ```

4. **Entwicklungsserver**: Bun kann als lokaler Entwicklungsserver verwendet werden und bietet schnelle Neuladefunktionen.

   ```bash
   bun dev
   ```

Bun ist ein leistungs- und geschwindigkeitsorientiertes Werkzeug, das speziell entwickelt wurde, um den Entwicklungsprozess in großen Projekten zu beschleunigen.

## Contributing

Pull Requests sind willkommen. Für größere Änderungen öffnen Sie bitte zuerst ein Issue, um zu besprechen, was Sie ändern möchten. Bitte stellen Sie sicher, dass Sie die Tests entsprechend aktualisieren.

## License

[MIT](https://choosealicense.com/licenses/mit/)
