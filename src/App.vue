<template>
    <draw :list="list" :win-index="winIndex" @save="save">
      <template #item='itemScope'>
        <p>用户自己的结构{{itemScope.itemData.text}}</p>
      </template>
      <template #btn>
        <span>用户自己的按钮</span>
      </template>
    </draw>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
interface ListArry {
  id: number | string;
  text: string;
}
export default defineComponent({
  name:'App',
  setup(){
    const list = ref<ListArry[]>(
      [
        {
          id: 0,
          text: "奖品1",
        },
        {
          id: 1,
          text: "奖品2",
        },
        {
          id: 2,
          text: "奖品3",
        },
        {
          id: 3,
          text: "奖品4",
        },
        {
          id: 4,
          text: "奖品5",
        },
        {
          id: 5,
          text: "奖品6",
        },
        {
          id: 6,
          text: "奖品7",
        },
        {
          id: 7,
          text: "奖品8",
        },
      ]
    )
    const winIndex = ref<number>(5);

    function save(){
      alert('我中奖了！')
    };
    return {
      list,
      winIndex,
      save
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

