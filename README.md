# Einkaufsladen-App für Kinder

Eine kindgerechte Kassen-App für den Spielzeug-Einkaufsladen. Kinder ab dem Alter von 3 Jahren
können damit spielerisch das Kaufen und Bezahlen üben — gemeinsam mit einem Erwachsenen
oder einem Geschwisterkind.

## Development

- check Node version in `.nvmrc`
- run `npm intall` to install dependencies
- run `npm run dev` to start the development server
- run `npm run build` to build the project in `dist/`

## Deployment

### Docker Container

- build the Docker container: `npm run build:container`
- Run: `npm run start:container`
- Open http://localhost:8080 to confirm the app loads
