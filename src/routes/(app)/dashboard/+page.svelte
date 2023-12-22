
<script lang="ts">
  export let form;
  console.log(form)
  export let data
  const users = data.users.users
</script>
<main class="main w-screen min-h-screen flex flex-col items-center gap-y-3">
  <p class="msg text-red-500">{form?.deleted?.msg || ""}</p>
  {#each users as user}

<h1 class="names">{user.username}</h1>
  {/each}
    <form method="post" action="?/deleteUsers" class="deleteusers">

    {#if data.decoded.admin}
    <button class="delete rounded-[6.4px] px-4 py-3 bg-red-700" type="submit ">DELETEALL</button>
    {/if}

    <button class="delete rounded-[6.4px] px-4 py-3 bg-green-700" type="submit" formaction="?/logout">LOGOUT</button>
  </form>
</main>
