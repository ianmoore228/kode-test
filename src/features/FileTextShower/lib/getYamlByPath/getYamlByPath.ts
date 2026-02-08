function isRecord(value: unknown): value is Record<string, unknown> {
    return (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    );
  }
  
  export function getYamlByPath(path: string, root: Record<string, unknown>) {
    const clean = path.replace(".yaml", "");

    const parts = clean.startsWith("paths/")
      ? ["paths", clean.replace("paths/", "")]
      : clean.split("/");
    
    let current: unknown = root;

    
  
    for (const part of parts) {
      if (isRecord(current) && part in current) {
        current = current[part];
      } else {
        return null;
      }
    }
  
    return current;
  }
  