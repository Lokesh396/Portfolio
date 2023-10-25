import axios from "./axios";
// const navigate = useNavigate()
const API = async ({
  url,
  method,
  responseType,
  data,
  cancelToken,
  params,
  headers,
}) => {
  let axiosRequestObject = {
    method,
    url,
    data,
    headers,
    responseType,
    params,
    ...(cancelToken
      ? {
        cancelToken,
      }
      : ""),
  };

  //REQUEST
  console.log(axiosRequestObject)
  try {
    let request = await axios.request(axiosRequestObject);
    return request.data;
  } catch (err) {
    if (!err.response) {
      return Promise.reject(err)
    }
    else return err.response
  }
};

export default API