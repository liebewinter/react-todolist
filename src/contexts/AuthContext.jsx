import { login, register, checkPermission } from 'api/auth';
import { createContext, useState, useEffect } from 'react';
import * as jwt from 'jsonwebtoken'; // 引入jwt套件，才能使用jwt.decode來解析token
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

// 定義contexts有哪些內容，每個頁面都可以使用的default資料狀態
const defaultAuthContext = {
  // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料（解析payload獲得currentMember）
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登入方法
};

// 透過createContext方法定義出AuthContext
const AuthContext = createContext(defaultAuthContext);
// 為了讓其他頁面都可以使用到上面的值，最後要用useContext
export const useAuth = () => useContext(AuthContext);
// 要export AuthProvider

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  // 要偵測「路徑是否變化」，則可以運用 react-router-dom 提供的 useLocation 方法，這個方法可以取得瀏覽器網址列中的路徑資訊
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      // localStorage取得authToken
      const authToken = localStorage.getItem('authToken');
      // 如果沒有authToken代表身份沒有經過驗證，所以要用setIsAuthenticated將isAuthenticated的狀態改成false，也不會有從authToken解析得到的payLoad，所以要用setPayload改成null
      if (!authToken) {
        setIsAuthenticated(false);
        setPayload(null);
        return; //動作停在這裡，不需要再去做後面的check動作
      }
      // 利用checkPermission api確認authToken的有效性，有效的及果會在result變數裡

      const result = await checkPermission(authToken);
      // 驗證有效
      if (result) {
        // 結果有效就用setIsAuthenticated將isAuthenticated改為true
        setIsAuthenticated(true);
        // 用jwe.decode解析authToken取得解析後的結果存在tempPayload
        const tempPayload = jwt.decode(authToken);
        // 再用setPayload將tempPayload存到payLoad裡面
        setPayload(tempPayload);
        // 驗證失敗
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
    };

    checkTokenIsValid();
    // 一旦 pathname 有改變，就需要重新驗證 token，因此需要使用 useEffect，而 dependency 參數需要設定為 pathname
  }, [pathname]);

  return (
    <AuthContext.Provider
      //  value指定defaultContext裡面的定義內容分別是什麼
      value={{
        //  對應isAughtenticated，在上面用useState儲存是否有效的值const [isAuthenticated, setIsAuthenticated] = useState(false);因此就可以在value裡面把值向外傳
        isAuthenticated,
        // 透過解析token的方式取得paylaod，在上面使用useState儲存const [payload, setPayload] = useState(null);，payload可能是null，所以加入判斷式，如果payload存在就去取得id和name
        currentMember: payload && {
          id: payload.sub, // jwt解析工具解析出sub字串作為使用者ID
          name: payload.name,
        },
        // 從resgister api取得資訊，自行定義為data，因爲 AuthContext 不會直接知道使用者在註冊表單的輸入值，所以需要補上一個 data 當成調用函式時的參數
        // 呼叫register api function。必需是async function
        register: async (data) => {
          // 將原本在signup page的function放到這裡，取出token資料
          // 從register api function取得success和authToken
          const { success, authToken } = await register({
            // 從data拿到username,email.password
            username: data.username,
            email: data.email,
            password: data.password,
          });
          // 從register api拿到token之後，利用jwt.decode解析token之後取得payload
          const tempPayload = jwt.decode(authToken);
          // 驗證解析後的payload是否存在，存在的話就用setPayload儲存
          if (tempPayload) {
            setPayload(tempPayload);
            // 因為經過if判斷之後具有解析token後的tempPload並用setPaylod儲存在payload，所以下面使用setIsAuthenticated將isAuthenticated的狀態改成true
            setIsAuthenticated(true);
            // 把解析的token存到localstorage
            localStorage.setItem('authToken', authToken);
          } else {
            // 如果解析token之後無效，沒有產生tempPload，就用setPayload將payload的內容設定為無null
            setPayload(null);
            // 因為沒有註冊或登入成功，沒有payload的值，所以使用setIsAuthenticated將isAuthenticated狀態設定為false
            setIsAuthenticated(false);
          }
          // 回傳success結果
          return success;
        },
        // loginContext
        // 呼叫login apifunction。必需是async function
        login: async (data) => {
          const { success, authToken } = await login({
            username: data.username,
            password: data.password,
          });
          const tempPayload = jwt.decode(authToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', authToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return success;
        },
        // logout功能
        logout: () => {
          // 移除localStorage的authToken
          localStorage.removeItem('authToken');
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
