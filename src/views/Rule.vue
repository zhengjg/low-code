<template>
  <div class="page-vvhvn">
    <p>
      活动期间，下载并安装
      <span>“财富汇APP”</span>
      ，进入APP首页后，找到活动入口，点击进入后即可参加活动，具体规则如下：
    </p>
    <div>
      <span>本次818理财节活动时间为</span>
      <span class="bold">2022年8月15日-2022年8月26日</span>
    </div>
    <p>
      1.做任务获得积分红包赢取转盘抽奖，集满50分即可获得一次转盘抽奖机会。新用户请用注册手机号开户并使用开立的资金账号才能获取活动的积分红包，已完成任务的用户可直接领取对应积分红包，其中，邀请好友参与转盘活动，被邀请人需要满足之前未参与过该活动，才能获得对应积分。
    </p>
    <p>
      2.定时财富红包：每天登陆即领积分，时间段为9:00-9:30,13:00-13:30，每个时间段最多只能领取一次。财富值范围5-10分随机。
    </p>
    <p>
      3.奖励领取规则：抽中福利理财产品（6.18%收益凭证、6.66%报价回购）购买资格限当天使用，过期未使用则作废，产品可能提前售罄无法购买成功。抽中折扣优惠券无使用时间限制，其中“投顾福利折扣”可叠加使用，“申购一折”不可叠加，可重复使用；抽中答题赢幸运福袋、礼包机会在答对问题后三个工作日内联系所在营业部留下寄送地址，过期视为放弃领奖。
    </p>
    <p>*答题赢礼包内容为随机抽取，请以页面提示为准。</p>
  </div>
</template>

<script setup>
import * as vue from 'vue'
import { defineProps, defineEmits } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'
import { p, span } from 'undefined'

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
.page-vvhvn {
  color: #666666;
  margin: 0 10px;
}
.page-vvhvn p {
  margin: 20px 0;
  font-size: 16px;
}
.page-vvhvn .bold,
p span {
  font-weight: bold;
}
</style>
