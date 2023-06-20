# A Cloudflare Worker to verify Firebase Auth ID tokens
It's tiny and nice, what more could you ask for? Sure, I could have built this into RustyBooks, but I was lazy.

Uses [web-auth-library](https://github.com/kriasoft/web-auth-library) to verify the tokens.

Necessary secrets:

- FIREBASE_CONFIG_JSON - your Firebase project's service account credentials

Licensed under the [WTFPL](https://github.com/nyDropTheC/FirebaseVerifier/blob/main/LICENSE) license.
