import axios from 'axios'

/**
  * get方法，对应get请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function get( data ){
  return new Promise((resolve, reject) =>{
      axios.get(data.url, {
        params: data.params
      }).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)
    })
  });
}
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
 export function post( data ) {
  return new Promise((resolve, reject) => {
    axios.post(data.url, data.params)
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  });
}