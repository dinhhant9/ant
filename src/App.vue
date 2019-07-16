<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      
      collapsible
      style="height: -webkit-fill-available"
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" @click="handleClickSideBar">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>{{$tc('sidebar',0)}}</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="appstore" />
          <span>{{$tc('sidebar',1)}}</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="logout" />
          <span>{{$tc('sidebar',2)}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />

        <span >{{$t('title')}}</span>
        
        <a-radio-group @change="changeLocale" defaultValue="en" style="float: right; margin-right: 20px">
          <a-radio-button value="en" >English</a-radio-button>
          <a-radio-button value="vi" >Tiếng Việt</a-radio-button>
        </a-radio-group>

      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <a-locale-provider :locale="locale">
        <router-view/>
        </a-locale-provider>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import i18n from '@/plugins/i18n';
import viVN from 'ant-design-vue/lib/locale-provider/vi_VN'
export default {
  data(){
    return {
      locale: null,
      collapsed: false,
      viVN
    }
  },
  methods:{
    changeLocale(e){
      i18n.locale = e.target.value
      if(e.target.value == "vi"){
        this.locale = viVN
      } else{
        this.locale = null
      }
    },
    handleClickSideBar(e){
      if(e.key == "1")
      {
        this.$router.push({name: "home"})
      }
      if(e.key == "2")
      {
        this.$router.push({name: "employee"})
      }
      if(e.key == "3")
      {
        //this.$router.push({name: "employee"})
      }
    }
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
