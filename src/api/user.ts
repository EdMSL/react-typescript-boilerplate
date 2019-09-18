import { client } from '$api/config';
import { ApiGithubRequestUrl, ApiErrorStatusCode } from '$api/constants';

interface IErrorResponse {
  errorStatus: number,
  errorText: string,
}

const parseResult = (result) => result && result.data;

const onError = ({ response }): IErrorResponse => {
  switch (response.status) {
    case ApiErrorStatusCode.BAD_REQUEST:
      return {
        errorStatus: response.status,
        errorText: 'Entered data is incorrect or this login allready exist. Please, check fields data.', // eslint-disable-line max-len
      };
    case ApiErrorStatusCode.UNAUTHORIZEDS:
      return {
        errorStatus: response.status,
        errorText: 'Authorisation error.',
      };
    case ApiErrorStatusCode.NOT_FOUND:
      return {
        errorStatus: response.status,
        errorText: 'User not found!',
      };
    case response.status >= ApiErrorStatusCode.INTERNAL_STATUS_ERROR:
      return {
        errorStatus: response.status,
        errorText: 'It seems something went wrong. Please, try later.',
      };
    default:
      return {
        errorStatus: response.status,
        errorText: response.statusText,
      };
  }
};

export const apiGetUser = (props = {}) => (
  client({
    ...props,
    method: 'GET',
    url: `${ApiGithubRequestUrl.GET_USER}EdMSL`,
  })
    .then(parseResult)
    .catch(onError)
);
