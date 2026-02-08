import { parse } from 'yaml';
import type { OpenApiProps } from '@/entities/openApi';

export function parseYaml(text: string): OpenApiProps {
  const parsed = parse(text);
  return parsed;
}