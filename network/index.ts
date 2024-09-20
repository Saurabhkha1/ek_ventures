import { BASE_URL } from "@/constants/actionConstant";
import axios from "axios";

const networkCall = async (config: any) => {
  const headers = {
    "Content-type": "application/json",
  };

  const res = await axios({
    url: BASE_URL + config.url,
    method: config.method,
    headers: headers,
    data: config.data,
  });

  const response = {
    status: res.status,
    data: res.data,
  };

  return response;
};

export default networkCall;
