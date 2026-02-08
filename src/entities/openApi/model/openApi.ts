export type ObjectProps = {
    [key: string]: string | ObjectProps;
  };
  
  type OtherOpenApiProps = {
    [key: string]: string | ObjectProps;
  };
  
  export type OpenApiProps = OtherOpenApiProps & {
    openapi: string;
    components: ObjectProps;
    paths: ObjectProps;
  };
  