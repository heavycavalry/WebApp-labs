export function DisabledGame(constructorFn: Function): void {
    constructorFn.prototype.disabled = true;
}

export function watched(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalFn = target[propKey];
  descriptor.value = function () {
    console.log(`Game: ${this.name} has been started.`);
    return originalFn.call(this);
  };
}