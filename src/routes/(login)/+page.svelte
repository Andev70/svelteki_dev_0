<script lang="ts">
  
  export let form
  
</script>

<form method="post">
  <p class="msg">{form?.response?.msg||""}</p>

  <p class="err">{form?.msg||""}</p>
  <input class="text-black" type="email" name="email" id="email" placeholder="enter email..." value={form?.email ?? ""}>


  <input class="text-black" type="password" name="password" id="password" placeholder="enter password...">
    <button type="submit">Submit</button>
</form>
