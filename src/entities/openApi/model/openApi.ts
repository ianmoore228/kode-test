export type ObjectProps =
  | string
  | number
  | boolean
  | null
  | ObjectProps[]
  | { [key: string]: ObjectProps };

export interface OpenApiProps {
  openapi: string;
  paths: Record<string, ObjectProps>;
  components: Record<string, ObjectProps>;
  [key: string]: ObjectProps;
}
