import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { createTodo, getTodos, patchTodo, deleteTodo } from 'api/todos';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const TodoPage = () => {
  // 讓初始資料是空陣列
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();

  const todoNums = todos.length;

  const handleChange = (value) => {
    setInputValue(value);
  };

  // 因為使用await獲得response，所以handler改成一個async function
  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return; //如果inputValue長度為0，回傳本來的todos
    }

    try {
      // 使用createTodo取得資料
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return; //如果inputValue長度為0，回傳本來的todos
    }
    try {
      // 使用createTodo取得資料
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  // patch todo和delete todo會觸發的動作
  const handleToggleDone = async (id) => {
    //從子層獲取的資訊是id，這樣就會知道是哪一筆資料需要更新

    const currentTodo = todos.find((todo) => todo.id === id);

    try {
      await patchTodo({
        id,
        isDone: !currentTodo.isDone,
      });
      setTodos((prevTodos) => {
        //獲取當前的Todos
        return prevTodos.map((todo) => {
          //使用.map遍歷當前Todos
          if (todo.id === id) {
            //如果遍歷的todo.id等於子層傳上來的id
            return {
              ...todo,
              isDone: !todo.isDone, // 使用!改變原本isDone的狀態
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return { ...todo, isEdit: false };
      });
    });
  };

  // patch todo和delete todo會觸發的動作
  const handleSave = async ({ id, title }) => {
    try {
      await patchTodo({
        id,
        title,
      });
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title,
              isEdit: false,
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  // 取用getTodos的方法
  useEffect(() => {
    // 非同步操錯可能有失敗情況，所以用try包覆動作，catch包覆錯誤訊息
    const getTodosAsync = async () => {
      try {
        // 透過await從後端取得所有todos
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      {/* TodoPage */}
      <Header username={currentMember?.name} />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer todosQty={todoNums} />
    </div>
  );
};

export default TodoPage;
