<template>
  <div class="page-pusvi">
    <ms-header>
      <span>页面导航头</span>
    </ms-header>
    <tiny-button text="活动规则" type="danger" class="tinybutton-swrgb" @click="redirectRules"></tiny-button>
    <big-wheel>
      <span>按钮文本222</span>
    </big-wheel>
    <score-task-list>
      <span>任务列表</span>
    </score-task-list>
    <ms-launch>
      <span>底部引导</span>
    </ms-launch>
  </div>
</template>

<script setup>
import * as vue from 'vue'
import { defineProps, defineEmits } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'
import { span } from 'undefined'
import { Button as TinyButton } from '@opentiny/vue'
import { Header as MsHeader, BigWheel, ScoreTaskList, Launch as MsLaunch } from 'ms-ui-lib'

const props = defineProps({})
const emit = defineEmits([])

const { t, lowcodeWrap, stores } = vue.inject(I18nInjectionKey).lowcode()
const wrap = lowcodeWrap(props, { emit })

const state = vue.reactive({})

const redirectRules = wrap(function redirectRules(event) {
  this.$router.push('/rule')
})

wrap({
  stores,
  state,
  redirectRules
})
</script>

<style scoped>
.page-pusvi {
  padding-top: 100px;
  padding-bottom: 60px;
}
.tinybutton-swrgb {
  position: fixed;
  top: 100px;
  right: 0px;
  z-index: 100;
}
</style>
