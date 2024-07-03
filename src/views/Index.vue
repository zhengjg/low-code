<template>
  <div class="page-pusvi">
    <tiny-button text="活动规则" type="danger" class="tinybutton-swrgb" @click="redirectRules"></tiny-button>
    <tiny-button text="活动规则" type="danger" class="tinybutton-swrgb" @click="redirectRules"></tiny-button>
    <big-wheel
      src="http://front-visual-bt1.oss-cn-shanghai.aliyuncs.com/icon/e17e9002-e913-4a55-815a-717624003a0e23.png"
    ></big-wheel>
    <score-task-list></score-task-list>
    <etf-hot></etf-hot>
    <span class="text-gugwk" @click="redirectMyAward">我的礼包</span>
    <etf-hot></etf-hot>
    <div class="div-fkgoy">
      <span class="ex-container">客服电话：95376</span>
    </div>
    <ms-launch>
      <span>底部引导</span>
    </ms-launch>
    <div class="div-gnstn">
      <span class="ex-container">免责声明：</span>
    </div>
    <ms-header
      title="理财节"
      textColor="#000000"
      shareTitle="818活动"
      shareSubstract="分享活动享积分，积分抽大奖"
      :isShare="true"
      bgColor="#ffffff"
    ></ms-header>
    <etf-hot></etf-hot>
    <div class="div-szlvv">
      <span class="text-mukpu">
        活动内容仅供参考，不构成实质性投资建议，据此操作风险自担。对此活动所引致的任何损失，民生证券不承担任何责任。投资有风险，入市需谨慎。
      </span>
    </div>
  </div>
</template>

<script setup>
import * as vue from 'vue'
import { defineProps, defineEmits } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'
import { span } from 'undefined'
import { Button as TinyButton } from '@opentiny/vue'
import { Header as MsHeader, BigWheel, ScoreTaskList, Launch as MsLaunch, EtfHot } from 'ms-ui-lib'

const props = defineProps({})
const emit = defineEmits([])

const { t, lowcodeWrap, stores } = vue.inject(I18nInjectionKey).lowcode()
const wrap = lowcodeWrap(props, { emit })

const state = vue.reactive({})

const redirectRules = wrap(function redirectRules(event) {
  this.router.push('/rule')
})

const redirectMyAward = wrap(function (event) {
  this.router.push('/award')
})

wrap({
  stores,
  state,
  redirectRules,
  redirectMyAward
})
</script>

<style scoped>
.page-pusvi {
  padding-top: 290px;
  padding-bottom: 70px;
  overflow: hidden;
  background: url(https://mumu19.cn/imgs/2022818/all-bg.png) center top no-repeat;
  background-size: 100%;
  background-color: #c5001b;
}
.tinybutton-swrgb {
  position: fixed;
  top: 100px;
  right: 0px;
  z-index: 100;
}
.ex-container {
  margin: 20px 10px;
  font-size: 16px;
  color: #ffffff;
}
.text-mukpu {
  margin-left: 0px;
  margin-right: 0px;
}
.div-szlvv {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.7;
}
.div-fkgoy {
  margin-top: 20px;
  margin-bottom: 10px;
}
.div-gnstn {
  margin-top: 5px;
  margin-bottom: 10px;
}
.text-gugwk {
  position: absolute;
  color: #e70922;
  font-size: 14px;
  padding: 5px 10px;
  font-weight: 500;
  background-color: #ffecae;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  left: 0px;
  top: 600px;
  opacity: 1;
  z-index: 10;
}
</style>
