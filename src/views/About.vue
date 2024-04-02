<template>
  <div class="page-szjqh">
    <ms-launch>
      <span>底部引导</span>
    </ms-launch>
    <big-wheel></big-wheel>
    <slot-machine>
      <span>老虎机抽奖</span>
    </slot-machine>
    <nine-square class="ninesquare-pmxig">
      <span>卡牌抽奖</span>
    </nine-square>
    <ms-header>
      <span>页面导航头</span>
    </ms-header>
    <score-task-list>
      <span>任务列表</span>
    </score-task-list>
  </div>
</template>

<script setup>
import * as vue from 'vue'
import { defineProps, defineEmits } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'
import { span } from 'undefined'
import { Header as MsHeader, BigWheel, NineSquare, SlotMachine, ScoreTaskList, Launch as MsLaunch } from 'ms-ui-lib'

const props = defineProps({})
const emit = defineEmits([])

const { t, lowcodeWrap, stores } = vue.inject(I18nInjectionKey).lowcode()
const wrap = lowcodeWrap(props, { emit })

const state = vue.reactive({})

wrap({
  stores,
  state
})
</script>

<style scoped>
.ninesquare-pmxig {
  margin-bottom: 60px;
}
.page-szjqh {
  padding-bottom: 40px;
  margin-top: 0px;
  background-image: url(img/bgcModal.png), linear-gradient(#ffffff, #ffffff);
  background-position: 0px 0px, 0px 0px;
  background-size: auto, auto;
  background-repeat: repeat, repeat;
  background-attachment: undefined, undefined;
  padding-top: 90px;
}
</style>
