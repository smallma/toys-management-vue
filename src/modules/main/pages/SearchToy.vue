<template>
  <div>
    <p class="error">{{ error }}</p>

    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <qrcode-stream v-if=this.camera @decode="onDecode" @init="onInit" />

    <div @click="handleCameraClick" class="btn_camera">click</div>
  </div>
</template>


<script>
  import { QrcodeStream } from 'vue-qrcode-reader'

  export default {
    name: 'SearchToy',

    components: { QrcodeStream },

    data () {
      return {
        result: '',
        error: '',
        camera: false
      }
    },

    methods: {
      onDecode (result) {
        this.result = result;
        this.camera = !this.camera;
      },
      handleCameraClick () {
        this.camera = !this.camera;
        console.log('camera: ', this.camera);
      },

      async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .decode-result {
    position: relative;
    font-size: 20px;

  }
  .wrapper {
    position: relative;
    margin-top: 100px;
    width: 300px;
    height: 300px;
  }

  .btn_camera {
    position: relative;
    width: 100px;
    height: 50px;

    background: red;
  }


</style>
