export type ChangedValueType<T, V> = {
  [K in keyof T]: V;
};
