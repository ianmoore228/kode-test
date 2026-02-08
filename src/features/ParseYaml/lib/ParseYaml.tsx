import { parse } from 'yaml';
import type { OpenApiProps } from '@/entities/openApi';

export function parseYaml(text: string): OpenApiProps {
  try {
    return parse(text);
  } catch (e) {
    alert("Некорректный YAML файл");
    throw e;
  }
}
