<main class=" min-h-screen flex w-screen flex-col items-center ">
  <div class="bg-gradient-to-r from-purple-400 to-indigo-500 shadow-md rounded-md p-6 w-full sm:w-96">
    <h1 class="text-3xl font-semibold mb-6 text-center text-white">Todo App Dashboard</h1>
    
    <div class="bg-white bg-opacity-50 rounded-md p-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">Task Statistics</h2>
      <div class="flex justify-between">
        <div class="w-1/2 pr-2">
          <p class="text-sm text-gray-600">Total Tasks</p>
          <p class="text-2xl font-semibold">15</p>
        </div>
        <div class="w-1/2 pl-2">
          <p class="text-sm text-gray-600">Completed Tasks</p>
          <p class="text-2xl font-semibold">8</p>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-600">Progress</p>
        <div class="bg-blue-200 h-4 rounded-full">
          <div class="bg-blue-500 h-full rounded-full w-5/12"></div>
        </div>
      </div>
    </div>
    
    <div class="bg-white bg-opacity-50 rounded-md p-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">Upcoming Tasks</h2>
      <ul>
        <li class="flex justify-between items-center py-2">
          <span class="flex-1">Task 1</span>
          <span class="text-gray-500 text-sm">Due: 2023-12-25</span>
        </li>
        <li class="flex justify-between items-center py-2">
          <span class="flex-1">Task 2</span>
          <span class="text-gray-500 text-sm">Due: 2023-12-28</span>
        </li>
        <!-- Additional upcoming tasks here -->
      </ul>
    </div>
    
    <div class="bg-white bg-opacity-50 rounded-md p-4 mb-4">
      <h2 class="text-xl font-semibold mb-4">Task Details</h2>
      <ul>
        <li class="flex justify-between items-center py-2">
          <span class="flex-1">Task Name</span>
          <span class="text-gray-500 text-sm">Priority: High</span>
        </li>
        <li class="flex justify-between items-center py-2">
          <span class="flex-1">Task Description</span>
          <span class="text-gray-500 text-sm">Lorem ipsum dolor sit amet...</span>
        </li>
        <!-- Additional task details here -->
      </ul>
    </div>
    
    <div class="bg-white bg-opacity-50 rounded-md p-4">
      <h2 class="text-xl font-semibold mb-4">Task Notes</h2>
      <ul>
        <li class="py-2">
          <p class="text-gray-500 text-sm">Note 1: Remember to complete this task by Friday.</p>
        </li>
        <li class="py-2">
          <p class="text-gray-500 text-sm">Note 2: Meeting scheduled for task review on Monday.</p>
        </li>
        <!-- Additional task notes here -->
      </ul>
    </div>
  </div>
</main>

