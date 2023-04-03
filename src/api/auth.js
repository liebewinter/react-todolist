import axios from 'axios';

const authURL = 'https://todo-list.alphacamp.io/api/auth';

// 登入function
export const login = async ({ username, password }) => {
  try {
    // 登入使用post
    // 因為使用axios，response會被封裝在data裡面，透過解構的方式{ data } 將data取出
    const { data } = await axios.post(`${authURL}/login`, {
      username,
      password,
    });

    // 登入成功之後會取得一個token
    const { authToken } = data;
    // 利用取得token的存在代表成功登入，就回傳資料以便後續利用，也一併再回傳資料時整理資料格式，家讓success屬性作為flag，之後就可以利用success屬性來判斷是否登入成功
    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
    return { success: false };
  }
};

// 註冊function
export const register = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
      email,
      password,
    });

    const { authToken } = data;
    // 利用取得token的存在代表成功登入，就回傳資料以便後續利用，也一併再回傳資料時整理資料格式，家讓success屬性作為flag，之後就可以利用success屬性來判斷是否登入成功
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Register Failed]: ', error);
    return { success: false };
  }
};

// 身份驗證
// 根據API規格傳入Token資訊
export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    // 根據後端提供的API規格，後端會提供sucess屬性告知true/false，並附上erroe說明，獲得後端回應之後將success屬性
    return response.data.success;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};
