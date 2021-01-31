<template>
  <div class="hello">
    <ul class='cj_box'>
      <li
        v-for='item in renderList'
        :key='item.id'
        :class="{active:activeIndex === item.index}"
        @click='fn(item)'
      >
        <slot
          name='item'
          :itemData='item'
          v-if='item.id!=="btn"'
        ></slot>
        <slot
          name='btn'
          v-else
        ></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "HelloWorld",
  props: {
    list: Array,
  },
  setup(props) {
    let activeIndex = ref(null); //{value}
    let cj = ref(5);
    let timer = null;
    let fn = function (item) {
      if (item.id !== "btn") return;
      activeIndex.value = null;
      cj.value = null;
      setTimeout(() => {
        cj.value = Math.floor(Math.random() * 8);
        console.log(cj, "应该中奖");
      }, 1000);
      move(10);
    };
    let move = function (time) {
      if (time > 600) {
        if (activeIndex.value !== cj.value) {
          timer = setTimeout(() => {
            let n = activeIndex.value + 1;
            activeIndex.value = n % 8;
            move(time + time * 0.05);
          }, time);
        } else {
          console.log("中奖了", cj);
        }
      } else {
        timer = setTimeout(() => {
          let n = activeIndex.value + 1;
          activeIndex.value = n % 8;
          move(time + time * 0.1);
        }, time);
      }
    };

    let renderList = computed(() => {
      let ary =
        props.list &&
        props.list.map((item, index) => {
          switch (index) {
            case 3:
              return {
                ...props.list[7],
                index: 7,
              };
            case 4:
              return {
                ...props.list[3],
                index: 3,
              };
            case 5:
              return {
                ...props.list[6],
                index: 6,
              };
            case 6:
              return {
                ...props.list[5],
                index: 5,
              };
            case 7:
              return {
                ...props.list[4],
                index: 4,
              };
            default:
              return {
                ...item,
                index: index,
              };
          }
        });
      return ary
        .slice(0, 4)
        .concat({ id: "btn", text: "开始抽奖" })
        .concat(ary.slice(4));
    });
    return {
      activeIndex,
      cj,
      fn,
      move,
      renderList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cj_box {
  width: 80vw;
  height: 80vw;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 25vw;
    height: 25vw;
    background: #eee;
  }
  li.active {
    background-color: rgb(233, 159, 159);
  }
}
</style>
