<template>
  <div class="hello">
    <h1 class="text-pink-500">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

