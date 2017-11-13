const checkStatus = (reponse) => {
  if (response.status == 200){
    return response;
  }

  throw new Error(response);
}

export const fetchData = (url, options) =>
                fetch(url, options).then(checkStatus).then((resp)=> resp.json());
