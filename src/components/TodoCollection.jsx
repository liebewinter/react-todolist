import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone, //因為TodoItem往上傳遞了onToggleDone，所已TodoCollection也有相同的prop
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={(id) => onToggleDone?.(id)}
            // 因為子層TodoItem裡面傳了onToggleDon(id)，為了將這個prop在傳到TodoCollection的父層TodoPage，所以在這邊也要使用onToggleDone?.(id)
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
            onSave={({ id, title }) => onSave?.({ id, title })}
            onDelete={(id) => onDelete?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
