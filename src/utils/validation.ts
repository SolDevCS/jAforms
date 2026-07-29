export function getNestedValue(object: any, path: string) {
  return path.split(".").reduce((current, key) => current?.[key], object);
}

export function isPageComplete(
  content: any,
  requiredFields: readonly string[],
) {
  return requiredFields.every((path) => {
    const value = getNestedValue(content, path);

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === "boolean") {
      return value;
    }

    return value !== "" && value !== null && value !== undefined;
  });
}
