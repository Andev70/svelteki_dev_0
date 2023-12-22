<main class=" min-h-screen w-screen px-3 flex pt-5 pb-4 justify-center">
  <div class="bg-white shadow-md rounded-md p-6 w-full h-max">
    <h1 class="text-3xl font-semibold mb-6 text-center text-black">Todo App</h1>
    <div class="flex items-center mb-4">
      <input type="text" placeholder="Add a new task..." class="flex-1 text-black rounded-l-md border-gray-300 border p-3 focus:outline-none">
      <button class="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none">Add</button>
    </div>
    <ul class="divide-y divide-gray-300">
      <li class="flex justify-between items-center py-3">
        <div class="flex items-center">
          <input type="checkbox" class="mr-3">
          <span class="flex-1 text-black">Sample Task 1</span>
        </div>
        <button class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
      </li>
      <li class="flex justify-between items-center py-3">
        <div class="flex items-center">
          <input type="checkbox" class="mr-3">
          <span class="flex-1 text-black">Sample Task 2</span>
        </div>
        <button class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
      </li>
      <!-- Additional tasks can be dynamically added here -->
    </ul>
    <p class="text-gray-500 text-sm mt-4">You have X tasks pending</p>
  </div>
</main>

