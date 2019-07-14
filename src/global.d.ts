declare interface NodeModule {
  hot: {
    accept(path?: string, fn?: () => void, callback?: () => void): void;
    dispose(fn?: () => void, callback?: () => void): void;
  };
}


declare interface PluginDefintion {
  [index: string]: any
}