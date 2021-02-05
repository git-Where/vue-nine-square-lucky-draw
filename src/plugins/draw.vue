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

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
  name:'Draw',
  props: {
    list: Array, // 传进来的奖品列表
    winIndex: Number // 传进来的中奖索引
  },
  emits:['save'],
  setup(props,context) {
    const activeIndex = ref<number>(0); //{value}
    const cj = ref<number>(props.winIndex); // 中奖的索引
    let timer:any;
    function move(time) {
      if (time > 600) {
        if (activeIndex.value !== cj.value) { // 如果选中索引跟预期中奖索引不一致，则继续转圈
          timer = setTimeout(() => {
            const n = activeIndex.value + 1;
            activeIndex.value = n % 8;
            move(time + time * 0.05);
          }, time);
        } else { // 如果选中索引跟预期中奖索引一致，则中奖
          console.log("中奖了", cj);
          context.emit('save')
        }
      } else {
        timer = setTimeout(() => {
          const n = activeIndex.value + 1;
          activeIndex.value = n % 8;
          move(time + time * 0.1);
        }, time);
      }
    }
    // 点击抽奖
    function fn(item) {
      if (item.id !== "btn") return;
      activeIndex.value = null;
      cj.value = null;
      setTimeout(() => {
        // cj.value = Math.floor(Math.random() * 8); // 随机生成中奖索引
        cj.value = 5; // 中奖索引为5
        console.log(cj.value, "应该中奖");
      }, 1000);
      move(10);
    }

    const renderList = computed(() => { //把中奖清单列表横向排列
      const ary =
        props.list &&
        props.list.map((item, index) => {
          switch (index) {
            case 3:
              return {
                ...props.list[7] as {},
                index: 7,
              };
            case 4:
              return {
                ...props.list[3] as {},
                index: 3,
              };
            case 5:
              return {
                ...props.list[6] as {},
                index: 6,
              };
            case 6:
              return {
                ...props.list[5] as {},
                index: 5,
              };
            case 7:
              return {
                ...props.list[4] as {},
                index: 4,
              };
            default:
              return {
                ...item as {},
                index: index,
              };
          }
        });
      // return ary
      //   .slice(0, 4)
      //   .concat({ id: "btn", text: "开始抽奖" })
      //   .concat(ary.slice(4));
      const conIndex4 = [{ id: 'btn', text: "开始抽奖" }]
      const ary1 = ary.slice(0, 4)
      const ary2 = ary.slice(4)
      const aryObj = []
      return aryObj.concat(ary1).concat(conIndex4).concat(ary2)
    });
    return {
      activeIndex,
      cj,
      fn,
      move,
      renderList,
    };
  },
})
</script>

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
    list-style: none;
  }
  li.active {
    background-color: rgb(233, 159, 159);
  }
}
</style>