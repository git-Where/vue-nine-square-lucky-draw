<template>
  <cj :list="list">
    <template #item='itemScope'>
      <p>用户自己的结构{{itemScope.itemData}}</p>
    </template>
    <template #btn>
      <span>用户自己的按钮</span>
    </template>
  </cj>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      list: [
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
      ],
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
