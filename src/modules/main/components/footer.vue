<template>
  <div class="footer">
    <div class="copyright">© 2019 Rain Lin Rights Reserved</div>
  </div>
</template>

<script>
  export default {
    name: 'footers'
  }
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #000;
}

.copyright {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  font-size: 15px;
  color: #fff6da;
  transform: translateY(-50%);
}


</style>
