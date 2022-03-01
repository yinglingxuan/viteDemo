<template>
  <div class="index">
    <!-- <div class="index_tag_body">
      <div>
        <div v-for="(item, index) in list" :key="index" class="index_tag_ul" :class="indexTag === index ? 'index_tag_ul_on' : ''" @click="onIndex(index)">
          <div
            class="index_tag_ul_left"
            :style="index === 0 ? 'border-top-left-radius: 5px' : index === list.length - 1 ? 'border-bottom-left-radius: 5px' : ''">
            <div class="index_tag_ul_li">
              <div class="index_tag_ul_li_int">{{ item.index }}</div>
              <div class="index_tag_p">
                <p class="index_tag_p_text"> {{ item.name }} </p>
                <p> {{ item.ptext }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index_tag_main">
        <div class="index_tag_main_img">
          <img :src="leftImgSrc" />
        </div>
        <div class="index_tag_main_pbody" :class="listDate.length > 2 ? '' : 'index_tag_main_pbody1'">
          <div v-for="(items, indexs) in listDate" :key="indexs" class="list" :class="indexs === indexKnow ? 'list_blue' : ''" @click="onListDate(indexs)">
            <div class="list_title">{{ items.title }}</div>
            <div class="list_p">{{ items.text }}</div>
            <div class="list_click">点击了解</div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="index_tag_uls">
      <div v-for="(item, index) in list" :key="index" class="index_tag_list" @click="onIndex(index)">
        <img v-if="index !== indexTag" :src="item.src" />
        <img v-else :src="item.onSrc" />
      </div>
    </div>
    <div class="index_tag_mains">
      <div>
        <img :src="leftImgSrc" />
      </div>
    </div>
    <div class="index_text_tag">
      <div
        v-for="(items, indexs) in listDate"
        :key="indexs"
        class="index_text_tag_lis"
        :class="indexs === indexKnow ? 'index_text_tag_lis_on' : ''"
        @click="onListDate(indexs)">
        <div>0{{ indexs + 1 }}</div>
        <div>{{ items.title }}</div>
        <div><img src="@/assets/img/icon_productcase_downlinepart1_off.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const indexTag = ref(0) // 左边数字的切换
  const indexKnow = ref(0) // 右边对应的点击了解的切换
  const listDate: any = ref([]) //点击数字后切换的数据
  const leftImgSrc: any = ref({}) // 左边的切换图片
  const list = ref([
    {
      index: '01',
      name: '互动娱乐',
      ptext: '直播、大屏、游戏、抽奖、红包',
      src: new URL('./../../assets/img/btn_productcase_entertainment_off.png', import.meta.url).href,
      onSrc: new URL('./../../assets/img/btn_productcase_entertainment_on.png', import.meta.url).href,
      tag: [
        {
          title: '互动直播',
          text: '互动现场直播，多端直播',
          imgs: new URL('./../../assets/img/images_product_livevideo.png', import.meta.url).href
        },
        {
          title: '现场互动小游戏',
          text: '全场景互动小游戏',
          imgs: new URL('./../../assets/img/images_product_game.png', import.meta.url).href
        },
        {
          title: '娱乐直播抽奖',
          text: '全类型互动式幸运抽奖',
          imgs: new URL('./../../assets/img/images_product_luckypacket.png', import.meta.url).href
        },
        {
          title: '营销电子请柬',
          text: '多场景互动式请柬',
          imgs: new URL('./../../assets/img/images_product_invationcard.png', import.meta.url).href
        }
      ]
    },
    {
      index: '02',
      name: '大数据',
      ptext: '全方位数据采集/管理与分析 ',
      src: new URL('./../../assets/img/btn_productcase_bigdate_off.png', import.meta.url).href,
      onSrc: new URL('./../../assets/img/btn_productcase_bigdate_on.png', import.meta.url).href,
      tag: [
        {
          title: '大数据分析平台',
          text: '数据精细化分析，形成数据图表',
          imgs: new URL('./../../assets/img/images_bigdate_bg@2x.png', import.meta.url).href
        },
        {
          title: '数据营销系统',
          text: '数据精细化分析，形成数据图表',
          imgs: new URL('./../../assets/img/images_salesmaketing_bg@2x.png', import.meta.url).href
        }
      ]
    },
    {
      index: '03',
      name: '企业级应用',
      ptext: '客户资料管理，派单签约调配',
      src: new URL('./../../assets/img/btn_productcaseenterprise_off.png', import.meta.url).href,
      onSrc: new URL('./../../assets/img/btn_productcaseenterprise_on.png', import.meta.url).href,
      tag: [
        {
          title: '企业资源管理ERP',
          text: '全方位客户资源管理系统',
          imgs: new URL('./../../assets/img/images_product_businesserp.png', import.meta.url).href
        },
        {
          title: '客户关系管理CRM',
          text: '客户关系管理CRM',
          imgs: new URL('./../../assets/img/images_bigdate_bg@2x.png', import.meta.url).href
        },
        {
          title: '移动智能办公OA',
          text: '审批办公移动化',
          imgs: new URL('./../../assets/img/images_productcase_oaserivce.png', import.meta.url).href
        }
      ]
    },
    {
      index: '04',
      name: '互联网金融',
      ptext: '定制化金融业务服务',
      src: new URL('./../../assets/img/btn_productcasefinace_off.png', import.meta.url).href,
      onSrc: new URL('./../../assets/img/btn_productcasefinace_on.png', import.meta.url).href,
      tag: [
        {
          title: '定制分期服务',
          text: '获客轻松，提升客单价与成交率',
          imgs: new URL('./../../assets/img/images_product_finace.png', import.meta.url).href
        }
      ]
    }
  ])

  const onIndex = (data: any) => {
    // 左边数字的切换
    indexTag.value = data
    listDate.value = list.value[data].tag
    indexKnow.value = 0
    // const imgUrl = new URL(listDate.value[0].imgs, import.meta.url).href
    leftImgSrc.value = listDate.value[0].imgs
  }
  onIndex(0)
  const onListDate = (data: any) => {
    //点击数字里面的 点击了解框
    indexKnow.value = data
    console.info(import.meta.url)
    // const imgUrl = new URL(listDate.value[data].imgs, import.meta.url).href
    leftImgSrc.value = listDate.value[data].imgs
  }
  onListDate(0)
</script>

<style lang="less" scoped>
  .index_tag_uls {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .index_tag_list {
      width: 20vw;
      margin: 0 10px;
      img {
        width: 100%;
      }
    }
  }
  .index_tag_mains {
    margin-top: 64px;
  }
  .index_text_tag {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
    .index_text_tag_lis {
      margin: 0 5px;
      text-align: left;
      font-size: 14px;
      line-height: 25px;
      color: #868789;
    }
    .index_text_tag_lis_on {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }

  @font-face {
    font-family: DIN1451Mittelschrift;
    src: url('@/assets/tff/DIN1451Mittelschrift.woff');
    font-weight: normal;
    opacity: 1;
  }
  img {
    max-width: 100%;
  }
  .index_tag_main {
    // width: 60vw;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0px 5px 15px 0px rgba(35, 24, 21, 0.18);
    display: flex;
    align-items: center;
    .index_tag_main_img {
      width: 30vw;
      margin: 20px 40px 20px 0px;
    }

    .index_tag_main_pbody {
      // margin-top: 80px;
      .list {
        width: 300px;
        height: 115px;
        background: #fcfcfc;
        box-shadow: 0px 5px 15px 0px rgba(35, 24, 21, 0.18);
        border-radius: 5px;
        text-align: center;
        margin-bottom: 20px;
        .list_title {
          font-size: 22px;
          font-weight: bold;
          color: #2078d9;
          padding-top: 20px;
          line-height: 25px;
        }
        .list_p {
          font-size: 14px;
          font-weight: bold;
          color: #c8c8c8;
          line-height: 25px;
        }
        .list_click {
          font-size: 14px;
          font-weight: bold;
          color: #2078d9;
          line-height: 34px;

          border-top: solid 1px #ebebeb;
          margin: 0 10px;
          margin-top: 5px;
        }
      }
      .list_blue {
        background: #2078d9;
        color: #fff;
        .list_title,
        .list_click {
          color: #fff;
        }
      }
    }
    .index_tag_main_pbody1 {
      .list {
        height: 135px;
        .list_title {
          font-size: 24px;
          line-height: 45px;
        }
      }
    }
    .index_tag_main_pbody2 {
      margin-top: 20px;
    }
  }
  .index_tag_body {
    display: flex;
  }
  .index_tag_ul {
    display: flex;
    margin-left: 20px;
    justify-content: flex-end;
    width: 100%;
    .index_tag_ul_left {
      background: #fff;
      color: #2078d9;
      width: 337px;
      padding: 50px 10px 40px 20px;
      box-shadow: 0px 5px 15px 0px rgba(35, 24, 21, 0.18);
      margin-right: 5px;
      .index_tag_ul_li {
        display: flex;
        .index_tag_ul_li_int {
          line-height: 53px;
          font-size: 58px;
          margin-right: 10px;
          font-family: DIN1451Mittelschrift;
        }
        .index_tag_p {
          text-align: left;
          font-size: 16px;
          .index_tag_p_text {
            color: #2078d9;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .index_tag_ul_on {
    margin: 0;
    .index_tag_ul_left {
      width: 337px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      background: #2078d9 !important;
      color: #fff;
      padding-left: 40px;
    }
    .index_tag_p_text {
      color: #fff !important;
    }
  }
  .index_background {
    position: relative;
    margin-top: -4px;
    background: #fff;
    margin-bottom: 400px;
    .index_back_tag {
      text-align: center;
      position: absolute;
      top: 177px;
      left: 50%;
      transform: translateX(-50%);
      color: #ffffff;
      .index_back_tag_title {
        height: 31px;
        font-size: 32px;
        font-weight: bold;
        color: #ffffff;
        line-height: 24px;
        width: 135px;
        margin: auto;
        border-bottom: solid 5px #2078d9;
      }
      .index_back_tag_p {
        font-size: 20px;
        font-weight: 500;
        color: #b6d9ff;
        line-height: 54px;
        margin-bottom: 50px;
      }
    }
  }
</style>
