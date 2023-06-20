import { verifyIdToken } from 'web-auth-library/google';

// I get that this is completely useless and could have been done in 5 minutes from Rust
// But I was lazy and thus I went with NodeJS

export default {
	async fetch ( request, env, _ ) {
		const [ bearer, token ] = request.headers.get ( 'Authorization' ).split ( ' ' );

		if ( bearer !== 'Bearer' ) {
			return new Response ( { status: 400 } );
		}

		try {
			await verifyIdToken ( {
				idToken: token,
				env: {
					GOOGLE_CLOUD_CREDENTIALS: env.FIREBASE_CONFIG_JSON
				}
			} );

			return new Response ( null, { status: 200, statusText: 'OK' } );
		} catch ( e ) { }

		return new Response ( null, { status: 400 } );
	}
};
