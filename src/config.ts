const getEnvVariable = (key: keyof ImportMetaEnv, defaultValue?: string): string => {
  const result: string | undefined = import.meta.env[key] ?? defaultValue;

  if (!result) {
    throw new Error(`환경변수 ${key}가 정의되지 않았습니다`);
  }

  return result;
};

export const mercuryBaseUrl = getEnvVariable('VITE_MERCURY_API_BASE_URL', 'http://localhost:8080');
export const productApiBaseUrl = getEnvVariable('VITE_PRODUCT_API_BASE_URL', 'http://localhost:8082');
export const productImgBaseUrl = getEnvVariable('VITE_PRODUCT_IMG_BASE_URL', 'http://localhost:4566');
