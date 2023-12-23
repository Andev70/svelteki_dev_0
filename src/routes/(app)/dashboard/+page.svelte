<script lang="ts">
 export let form 
 
export let data 
</script>

<main class=" min-h-screen w-screen px-3 flex pt-5 pb-4 flex-col items-center">

  <p class="msg">{form?.todo?.msg ||""}</p>
  <p class="msg">{form?.msg ||""}</p>
  <p class="msg">{form?.deleted?.msg ||""}</p>
  <div class="bg-white shadow-md rounded-md p-6 w-full h-max">
    <h1 class="text-3xl font-semibold mb-6 text-center text-black">Todo App</h1>
    <form method="post" action="?/createTodo" class="flex items-center mb-4">
      <input name="todo" id="todo" type="text" placeholder="Add a new task..." class="flex-1 text-black rounded-l-md border-gray-300 border p-3 focus:outline-none">
      <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none">Add</button>
    </form>
    <ul class="divide-y divide-gray-300">
      {#each data.myTodos.todos as todo}
         
      <li class="flex justify-between items-center py-3">
        <div class="flex items-center">
            <form method="post" class="com w-max h-max">
  <input name="taskid" formaction="?/completeTodo" type="checkbox" class="mr-3" checked={todo.completed}/>
</form>
          <span class="flex-1 text-black">{todo.title}</span>
        </div>
            <form class="w-max h-max" method="post">
            <input class="w-0 h-00" type="text" name="todoid" id="title" value={todo?._id}>
        <button type="submit" formaction="?/deleteTodo" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
            </form>
      </li>
      {/each}
      
    </ul>
    <p class="text-gray-500 text-sm mt-4">You have X tasks pending</p>
  </div>
</main>

