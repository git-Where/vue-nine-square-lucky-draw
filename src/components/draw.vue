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
import { Component, Vue } from 'vue-property-decorator';
@Component({
    props:{
        list:Array
    }
})
export default class Draw extends Vue {

}
</script>

<style scoped>
/* .cj_box {
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
} */
</style>