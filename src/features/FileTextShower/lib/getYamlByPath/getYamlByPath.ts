function isRecord(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

export function getYamlByPath(path: string, root: Record<string, unknown>) {
  const clean = path.replace(".yaml", "");

  if (clean.startsWith("paths/")) {
    const raw = clean.replace("paths/", "");
    const key = raw.startsWith("/") ? raw : "/" + raw;

    const paths = root.paths;
    if (isRecord(paths) && key in paths) {
      return paths[key];
    }
    return null;
  }

  if (clean.startsWith("components/")) {
    const parts = clean.split("/"); 
    const [, type, name, ...rest] = parts;
    const components = root.components;

    if (
      isRecord(components) &&
      type in components &&
      isRecord(components[type]) &&
      name in components[type]
    ) {
      let current = components[type][name];
      for (const key of rest) {
        if (isRecord(current) && key in current) {
          current = current[key];
        } else {
          return null;
        }
      }
      return current;
    }
    return null;
  }

  if (clean === "openapi") {
    return root;
  }

  return null;
}
