import axios from 'axios';
const baseUrl = ' https://todo-list.alphacamp.io/api/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 在header加上Token
    const token = localStorage.getItem('authToken');
    // 如果token存在，就使用config設定header，header的key使用authorization，value
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  // 如果發送請求失敗就把錯誤訊息印出來
  (error) => {
    console.error(error);
  },
);

export const getTodos = async () => {
  try {
    // 非同步操作要用await獲得，獲得的方式是response(res)
    // 原本內容是axios，抽換成axiosInstance，讓每個使用者取得自己的todolist
    const res = await axiosInstance.get(`${baseUrl}/todos`);
    // 取得的內容是res.data，才是server實際上回傳的結果
    return res.data;
  } catch (error) {
    console.error('[Get Todos failed]: ', error);
  }
};

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  // 變數 payload 通常用來表示「打包後的資訊」，在這裡打包了想要新增的 todo 內容

  try {
    const res = await axiosInstance.post(`${baseUrl}/todos`, {
      title,
      isDone,
    });
    // 實際上在資料庫上面的todolist還包覆在data的資料架，因為還要在res.data後面加上.data才能取得todolis資料
    return res.data.data;
  } catch (error) {
    console.error('[Create Todo failed]: ', error);
  }
};

export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;
  try {
    const res = await axiosInstance.patch(`${baseUrl}/todos/${id}`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[Patch Todo failed]: ', error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error(`[Delete Toto failed]:`, error);
  }
};
