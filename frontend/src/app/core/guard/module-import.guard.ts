export function throwIfAlreadyLoaded(module: any, name: string): void {
  if (module) {
    throw new Error(`${name} has been already loaded. Import ${name} in the AppModule only.`);
  }
}
