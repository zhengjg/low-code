<template>
  <div>
    <header>
      <span>页面导航头</span>
    </header>
    <big-wheel></big-wheel>
    <big-wheel></big-wheel>
    <big-wheel></big-wheel>
    <big-wheel>
      <span>按钮文本222</span>
    </big-wheel>
    <marquee>
      <span>九宫格抽奖</span>
    </marquee>
  </div>
</template>

<script setup>
import * as vue from 'vue'
import { defineProps, defineEmits } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'
import { span } from 'undefined'
import { Header, BigWheel, Marquee } from 'ms-ui-lib'

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

<style scoped></style>
