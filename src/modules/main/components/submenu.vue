<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon :type=menuInfo.icon /><span>{{ menuInfo.title }}</span>
      <router-link :to="`${menuInfo.href || ''}`"></router-link>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon :type=item.icon />
        <span>{{ item.title }}</span>
        <router-link :to="`${item.href || ''}`"></router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default {
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
