import { ResolverEngine } from "@resolver-engine/core";
import { resolvers } from "@resolver-engine/fs";

const resolver = new ResolverEngine<string>({ debug: true }).addResolver(resolvers.NodeResolver());

resolver.resolve("@types/request/index.d.ts").then(console.log);
