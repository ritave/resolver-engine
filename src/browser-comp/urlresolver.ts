import { SubResolver, ResolverContext } from "../resolvers";
import Debug from "debug";

const debug = Debug("resolverengine:urlresolver2");

export interface BrowserCompatibleUrlResolverContext extends ResolverContext {
	// options?: request.Options;
}

// Proof of concept
export function BrowserCompatibleUrlResolver(): SubResolver {
	return (what: string, ctx: BrowserCompatibleUrlResolverContext): Promise<string | null> =>
		new Promise((resolve, reject) => {
			// TODO: url check
			if (1 < 0) {
				return resolve(null);
			}

			ctx.system.tmpFile((err, path, sink) => {
				if (err) {
					return reject(err);
				}

				ctx.system.requestGet(
					what,
					(err) => { resolve(null) },
					(data: any) => {
						debug("Received data %O", data);
						sink(data);
					},
					() => {
						debug("Resolving with %s", path);
						resolve(path);
					})
			})

		});
}
