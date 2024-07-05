<template>
  <div class="page-kgsfo">
    <global-header title="我的奖品">
      <span>次级导航头</span>
    </global-header>
    <credential-award></credential-award>
  </div>
</template>

<script setup>
import * as vue from 'vue'
import { defineProps, defineEmits } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

import { GlobalHeader, CredentialAward } from 'ms-ui-lib'

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
.page-kgsfo {
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
