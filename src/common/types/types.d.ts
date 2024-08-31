type IThunkApi = {
  onSuccess?: (data: unknown) => void;
  onError?: (e: ApiError) => void;
};
