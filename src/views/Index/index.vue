<template>
  <div class="index">
    <div class="index_video">
      <swiper
        class="swiper"
        :autoplay="{
          disableOnInteraction: false,
          reverseDirection: false,
          delay: 5000
        }"
        :pagination="{ clickable: true }">
        <swiper-slide>
          <video autoplay loop muted style="width: 100vw;">
            <source src="@/assets/img/one.mp4" type="video/mp4" />
          </video>

          <div class="index_video_body index_video_body1"> <img src="@/assets/img/images_home_technologyfonts.png" /> </div>
        </swiper-slide>
        <swiper-slide>
          <video autoplay loop muted style="width: 100vw;">
            <source src="@/assets/img/two.mp4" type="video/mp4" />
          </video>
          <div class="index_video_body">
            <div class="index_video_body_title"> 探索全行业数字化建设 </div>
            <div class="index_video_body_p"> 了解各行业数字化建设，运用柏易技术搭建数字化建设新时代 </div>
            <div class="index_btn"> <img src="@/assets/img/btn_knowlegecase_bg@2x.png" /> </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div id="case" class="index_background">
      <!-- <img src="@/assets/img/images_productcase_bg.png" /> -->
      <div class="index_back_tag">
        <div class="index_back_tag_title"> 产品案例 </div>
        <div class="index_back_tag_p"> 全方位，数字化科技服务展示 </div>

        <TagList></TagList>
      </div>
    </div>
    <div id="technology" class="details">
      <div class="details_innovation">
        <div class="details_innovation_video">
          <video autoplay loop muted style="width: 100%;">
            <source src="@/assets/img/innovation.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="details_innovation_left">
          <div class="details_innovation_left_title">创新技术</div>
          <p class="details_innovation_left_p">跨行业探索技术应用</p>
          <div class="details_innovation_left_taglist">
            <div class="list" @click="onIndex(1)">
              <div v-if="index === 1" class="list_one"></div>
              <img v-else src="@/assets/img/icon_newtechnology_argatair_xs_off@2x.png" />

              <div class="list_p" :class="index === 1 ? 'list_p_on' : ''">AR导航技术</div>
            </div>
            <div class="list" @click="onIndex(2)">
              <div v-if="index === 2" class="list_two"></div>
              <img v-else src="@/assets/img/icon_newtechnology_arshawdows_xs_off@2x.png" />
              <div class="list_p" :class="index === 2 ? 'list_p_on' : ''">AR虚拟成像</div>
            </div>
            <div class="list" @click="onIndex(3)">
              <div v-if="index === 3" class="list_three"></div>
              <img v-else src="@/assets/img/icon_newtechnology_videocuts_xs_off@2x.png" />
              <div class="list_p" :class="index === 3 ? 'list_p_on' : ''">视频自动剪辑技术</div>
            </div>
          </div>
        </div>
        <div v-if="index === 1" class="details_innovation_right">
          <img src="@/assets/img/images_newtechnology_argaitar.png" />
        </div>
        <div v-if="index === 2" class="details_innovation_right">
          <img src="@/assets/img/images_newtechnology_arshawdows@2x.png" />
        </div>
        <div v-if="index === 3" class="details_innovation_right">
          <img src="@/assets/img/images_newtechnology_videocuts.png" />
        </div>
      </div>
      <div id="about" class="details_innovation details_About">
        <div class="details_innovation_video">
          <video autoplay loop muted style="width: 100%;">
            <source src="@/assets/img/video_aboutme_bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="details_About_right">
          <div class="details_innovation_right_title">关于我们</div>
          <p class="details_innovation_right_p">柏易科技</p>
          <div class="About_p_body">
            <div class="About_p">
              深圳柏易科技有限公司立足于智能软件研发，聚焦创新研发、可视化管理、数 字孪生、智慧应用等领域，为广大企业用户提供全生命周期的信息化建设服务，致
              力于打造To C、To B端的全方位智慧产业生态链。
            </div>
            <div class="About_p"
              >为满足各大中型企业管理不断升级的规范化、科学化、现代化建设需求，柏易科技 深耕行业大数据应用管理软件的研发。经过多年的技术探索与经验积累，为多个行
              业用户提供了大数据分析应用解决方案。</div
            >
            <div class="About_p">
              柏易科技开创数据先行的研发思想，秉承以人为本的创新理念，坚持自研自创的科 研精神，以过硬的技术实力和可靠的产品质量，获得了业界与客户的广泛认可。
            </div>
          </div>
        </div>
      </div>
      <div class="bu"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import TagList from '@/components/tagList/index.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import SwiperCore, { Autoplay } from 'swiper'
  import { Pagination } from 'swiper'
  SwiperCore.use([Autoplay, Pagination])

  const index = ref(2)
  const onIndex = (data: any) => {
    index.value = data
  }
</script>

<style lang="less" scoped>
  @font-face {
    font-family: cc;
    src: url('@/assets/tff/cc.woff');
    font-weight: normal;
    opacity: 1;
  }

  .swiper {
    width: 100%;
    .swiper-container {
      width: 100%;
    }
    ::v-deep(.swiper-pagination) {
      width: 100%;
      span {
        margin: 0 10px;
      }
    }
    ::v-deep(.swiper-pagination-bullet) {
      width: 5vw;
      border-radius: 0;
      background: #ffffff;
      &.swiper-pagination-bullet-active {
        background: #2078d9;
      }
    }
    .swiper-slide {
      overflow: hidden;
    }
  }
  ::v-deep(.swiper-pagination-bullets) {
    bottom: 5vw;
  }
  * {
    padding: 0;
    margin: 0;
  }
  img {
    width: 100%;
  }
  .bu {
    background: #000;
    height: 10px;
    margin-top: -10px;
  }
  .details {
    .details_About {
      margin-top: -5px;
      .details_About_right {
        position: absolute;
        top: 9vw;
        right: 10vw;
        width: 35vw;
        text-align: right;
        .About_p_body {
          margin-top: 10vw;
          text-align: left;
          .About_p {
            color: #fff;
            line-height: 25px;
            font-size: 0.9vw;
            margin-bottom: 20px;
          }
        }
        .details_innovation_right_title {
          position: absolute;
          right: 0px;
          width: 130px;
          border-bottom: solid 4px #2078d9;
          height: 31px;
          font-size: 32px;
          font-weight: bold;
          color: #ffffff;
          line-height: 24px;
        }
        .details_innovation_right_p {
          position: absolute;
          right: 0px;
          top: 40px;
          font-size: 20px;
          width: 130px;
          font-weight: 500;
          color: #b6d9ff;
          line-height: 44px;
        }
      }
    }
    .details_innovation {
      position: relative;
      .details_innovation_video {
      }
      .details_innovation_right {
        position: absolute;
        top: 7vw;
        right: 10vw;
        width: 30vw;
      }
      .details_innovation_left {
        position: absolute;
        top: 7vw;
        left: 10vw;
        color: #fff;
        .details_innovation_left_title {
          width: 130px;
          border-bottom: solid 4px #2078d9;
          height: 31px;
          font-size: 32px;
          font-weight: bold;
          color: #ffffff;
          line-height: 24px;
        }
        .details_innovation_left_p {
          font-size: 20px;
          font-weight: 500;
          color: #b6d9ff;
          line-height: 44px;
        }
        .details_innovation_left_taglist {
          display: flex;
          .list {
            margin-right: 4vw;
            margin-top: 2vw;
            display: table-cell;
            text-align: center;
            img {
              width: 100px;
              height: 100px;
            }
            .list_one {
              width: 100px;
              height: 100px;
              margin: auto;
              background-image: url('@/assets/img/icon_newtechnology_argatair_xs_on.png');
              background-repeat: no-repeat;
              background-position: 0 0;
              animation: 1s move infinite steps(25, end); /*整个动画执行时间 执行的动画名 循环关键帧的次数 两个关键帧之间的动画效果*/
            }
            .list_two {
              width: 100px;
              height: 100px;
              margin: auto;
              background-image: url('@/assets/img/icon_newtechnology_arshawdows_xs_on.png');
              background-repeat: no-repeat;
              background-position: 0 0;
              animation: 1s move infinite steps(25, end); /*整个动画执行时间 执行的动画名 循环关键帧的次数 两个关键帧之间的动画效果*/
            }
            .list_three {
              width: 100px;
              height: 100px;
              margin: auto;
              background-image: url('@/assets/img/icon_newtechnology_videocuts_xs_on.png');
              background-repeat: no-repeat;
              background-position: 0 0;
              animation: 1s move infinite steps(25, end); /*整个动画执行时间 执行的动画名 循环关键帧的次数 两个关键帧之间的动画效果*/
            }
          }
          .list_p {
            font-size: 20px;
            font-weight: 500;
            color: #515151;
            line-height: 24px;
            text-align: center;
            margin-top: 10px;
          }
          .list_p_on {
            color: #b6d9ff;
          }
        }
        @keyframes move {
          from {
            background-position: 0, 0;
          }
          to {
            background-position: -2500px, 0;
          }
        }
      }
    }
  }

  .index_tag_main {
    width: 60vw;
    background: #fff;
    box-shadow: 0px 5px 15px 0px rgba(35, 24, 21, 0.18);
  }
  .index_video {
    position: relative;

    .index_video_body {
      position: absolute;
      left: 20vw;
      top: 20vw;
      color: #ffffff;
      .index_btn {
        width: 118px;
      }
      .index_video_body_title {
        font-size: 2.5vw;
        font-family: cc;
      }
      .index_video_body_p {
        font-size: 1vw;
        line-height: 60px;
      }
    }
    .index_video_body1 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 18.5vw;
    }
  }
  .index_background {
    position: relative;
    margin-top: -4px;
    background: #fff;
    height: 1000px;
    z-index: 9999;
    background: url('@/assets/img/images_productcase_bg.png');
    background-size: 100% 100%;
    .index_back_tag {
      text-align: center;
      position: absolute;
      top: 77px;
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
  @media screen and (max-width: 1300px) {
    .details_innovation_left {
      top: 1vw !important;
      left: 5vw !important;
    }
    .details_innovation_left_taglist {
      .list {
        margin-right: 2vw !important;
      }
    }
  }
</style>
