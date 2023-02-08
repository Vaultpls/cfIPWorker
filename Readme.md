This is a simple IP grabber/displayer.

git clone https://github.com/Vaultpls/cfIPWorker

Your .denoflare file

> {
> "$schema": "https://raw.githubusercontent.com/skymethod/denoflare/v0.5.11/common/config.schema.json",
> "scripts": {
> "ip": {
> "path": "index.ts",
> "localPort": 3030
> }
> },
> "profiles": {
> "myprofile": {
> "accountId": "Your accountId",
> "apiToken": "Your apiToken"
> }
> }
> }

denoflare push ip
