<template>
  <div class="layout">
    <header>
      <div class="header_body">
        <div class="header_loge"> <img src="@/assets/img/icon_baiyilogo_bottom@2x.png" /> </div>
        <div class="header_taglist">
          <div><a href="#case"> 产品案例 </a></div>
          <div><a href="#technology"> 创新技术 </a></div>
          <div><a href="#about"> 关于我们 </a></div>
          <div><a href="#cooperation"> 合作商户 </a></div>
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div id="cooperation" class="footer_body">
        <div class="booter_taglist">
          <div class="booter_title"> 产品案例 </div>
          <div> 互动娱乐 </div>
          <div> 大数据 </div>
          <div> 企业级应用 </div>
          <div> 互联网金融 </div>
        </div>
        <div class="booter_taglist">
          <div class="booter_title"> 创新技术 </div>
          <div> AR增强现实技术 </div>
          <div> 视频自动剪辑技术 </div>
        </div>
        <div class="booter_taglist">
          <div class="booter_title"> 联系我们 </div>
          <div> 技术服务 Service@baiyi-tec.com</div>
          <div> 商务合作 Support@baiyi-tec.com </div>
          <div> 联系电话 400 8125 8452</div>
          <div> 公司地址 深圳市福田区兆邦基金融大厦2405 </div>
        </div>
        <div class="booter_code">
          <div class="booter_title"> 微信扫一扫 </div>
          <img src="@/assets/img/icon_qrcode_bg.png" />
        </div>
      </div>
      <div class="booter_copyright">
        <div> copyright {{ new Date().getFullYear() }} 深圳柏易科技有限公司 版权所有 </div>
        <!-- <a href="http://idinfo.zjaic.gov.cn/bscx.do">
          <div class="booter_copyright_img"><img src="@/assets/img/down_icon.png" /></div>
          <div class="booter_copyright_have">  </div>
        </a> -->

        <a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank" class="report-link booter_copyright" rel="noreferrer">
          <img alt="" data-src="@/assets/img/down_icon.png" class="report-img" src="@/assets/img/down_icon.png" />
          <div class="report-link-text" data-spm-anchor-id="5176.login-login.htm.0.i1">粤ICP备2021179880</div>
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  a {
    color: #c1c1c1;
    text-decoration: none;
  }

  // a:-webkit-any-link {
  //   color: -webkit-link;
  //   cursor: pointer;
  //   text-decoration: none;
  // }
  .report-link-text {
    // font-size: 12px;
    // height: 20px;
    // line-height: 20px;
    // color: rgb(147, 147, 147);
    // margin-left: -7px;
    color: #c1c1c1;
    text-decoration: none;
    cursor: pointer;
    line-height: 20px;
  }
  .report-img {
    margin: 0 10px;
  }

  .header_body {
    display: flex;
    background: rgba(000, 000, 000, 0.7);
    color: #c1c1c1;
    line-height: 50px;
    border-bottom: solid 1px rgb(114, 106, 106);
    position: fixed;
    top: 0px;
    z-index: 999999;
    width: 100%;

    .header_loge {
      width: 55%;
      img {
        width: 139px;
        height: 32px;
        margin-left: 20vw;
        margin-top: 15px;
      }
    }
    .header_taglist {
      display: flex;
      width: 45%;
      div {
        width: 100px;
        text-align: center;
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }
  .footer_body {
    display: flex;
    // padding: 0 20vw;
    color: #999999;
    background: #000000;
    font-size: 14px;
    padding-top: 107px;
    padding-bottom: 81px;
    justify-content: center;
    .booter_code {
      margin-left: 5vw;
    }
    .booter_title {
      font-size: 16px;
      color: #ffffff;
      margin-bottom: 41px;
      cursor: default !important;
    }
    .booter_taglist {
      // width: 250px;
      margin: 0 4vw;
      line-height: 30px;
      div:hover {
        cursor: pointer;
      }
    }
  }
  .booter_copyright {
    display: flex;
    background: #000000;
    color: #ffffff;
    font-size: 14px;
    justify-content: center;
    line-height: 22px;
    padding-bottom: 20px;
    .booter_copyright_img {
      margin-left: 25px;
      margin-right: 3px;
      cursor: pointer;
    }
    .booter_copyright_have {
      cursor: pointer;
    }
  }
</style>
