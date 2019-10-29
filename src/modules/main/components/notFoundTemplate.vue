<template>
  <div>
    <div class="container_404">
      <div class="head_404">
        <div class="meta_404"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'notFoundTemplate'
  }
</script>

<style lang="scss">
.container_404 {
  background-color: #1A1A1A;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  overflow: hidden;
  color: #fff;

  &:after ,  &:before{
    content: '404';
    position: absolute;
    font-size: 100px;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 340px;
    font-weight: 600;
    z-index: 200;
  }
  &:before{
    content: 'Page Not Found';
    font-size: 22px;
    font-weight: 400;
    bottom: 330px;
  }
}

.head_404 {
  display: block;
  width: 35px;
  height: 140px;
  background: #646464;
  border-bottom: 10px solid #333;
  margin: auto;
  transform-origin: 50% , 100%;
  animation:find 5s linear infinite;
   position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  &:after{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 25px 25px 0 25px;
    border-color: #333 transparent transparent transparent;
    width: 85px;
    left: -25px;
    top: 0;
    box-shadow: 0px -10px 0 #FEAF33;
    // @include box-shadow(0px -10px 0 #FEAF33);
  }
  &:before{
    content: '';
    position: absolute;
    width: 8px;
    height: 15px;
    background: #FEAF33;
    left: 0;right: 0;
    margin: auto;
    top: 40px;
    // @include
    border-radius: 6px;
    box-shadow: 0px 0 1px 2px #333;
    // @include box-shadow(0px 0 1px 2px #333);
  }
}

.meta_404 {
  display: block;
  width: 250px;
  height: 200px;
  background:#100708;
  // @include border-radius(50%);
   position: absolute;
  left: -107px;
  bottom: 270px;
  margin: auto;
  text-align: center;
  color: #333;
  font-size: 90px;
  line-height: 200px;
  font-weight: 600;
  border-radius: 50%;

    &:after{
    content: '';
    position: absolute;
    z-index: -1;
    border-style: solid;
    border-width: 190px 75px 0 75px;
    border-color: rgba(188, 188, 188, 0.3) transparent transparent transparent;
    width: 230px;
    left: 10px;
    top: 100%;
    transform: translateY(-60px);
  }
}

@keyframes find {
  25% {
    transform: rotate(25deg)}
  0%, 50%, 100% {transform: rotate(0deg)}
  75%{transform: rotate (-25deg)}
}
</style>
