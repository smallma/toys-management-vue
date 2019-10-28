<template>
  <div>
    <p class="error">{{ error }}</p>


    <a-row type="flex" justify="space-around" align="top" class="controller">
      <a-col :span="12" class="zone-input">
        <div class="heading">{{ $t('message.search.method1') }}</div>
        <a-input :placeholder="$t('message.search.inputQrcode')" v-model="qrcode"  />
      </a-col>
      <a-col :span="12" class="zone-qrcode">
        <div class="heading">{{ $t('message.search.method2') }}</div>
        <a-button @click="handleCameraClick" type="primary">{{ $t('message.search.clickToOpenCamera')}}</a-button>
        <div class="camera">
          <div class="camera_text">{{ $t('message.search.cameraView')}}</div>
          <qrcode-stream v-if=this.camera @decode="onDecode" @init="onInit" />
        </div>
      </a-col>
    </a-row>

    <div class="results">
      <div v-for="i in searchToys">
        {{i}}
        <Card :cardData=i></Card>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex';
  import { QrcodeStream } from 'vue-qrcode-reader'
  import Card from '../components/card';


  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  export default {
    name: 'SearchToy',

    components: {
      QrcodeStream,
      Card,
    },
    data () {
      return {
        qrcode: '',
        error: '',
        camera: false
      }
    },
    computed: {
      ...mapState('toy', {
          searchToys: state => state.searchToys,
        })
    },
    watch: {
      qrcode() {
        this.getCardInfo()
      }
    },
    methods: {
      onDecode (result) {
        this.qrcode = result;
        this.camera = !this.camera;
      },
      handleCameraClick () {
        this.camera = !this.camera;
        console.log('camera: ', this.camera);
      },
      getCardInfo: debounce(function () {
        console.log('changed: ', this.qrcode)
        this.$store.dispatch('toy/getToysByQrcode', this.qrcode);
      }, 1000),
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
  .controller {
    position: relative;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    border-bottom: 1px solid #eae8e8;


    .heading {
      position: relative;
      text-align: center;
      width: 100%;
      padding: 15px;
      font-size: 18px;

      background-color: #eee;
    }

    .zone-input,
    .zone-qrcode {
      padding-bottom: 30px;
    }

    .zone-input {
      input {
        position: relative;
        display: block;
        top: 170px;
        margin: 0 auto;
        width: 70%;
      }
    }

    .zone-qrcode {
      &:before {
        position: absolute;
        display: block;
        z-index: 1;
        content: '';

        width: 1px;
        height: 100%;

        background-color: #eae8e8;
      }

      button {
        width: 40%;
        margin: 30px 0;
      }
    }

    .camera {
      position: relative;
      margin: 8px auto 0;
      width: 410px;
      height: 310px;

      background: #eee;
      border: 1px dashed #ccc;

      .camera_text {
        position: absolute;
        top: 50%;
        left: 50%;

        font-size: 18px;

        color: #333;
        transform: translate(-50%, -50%);
      }

      .wrapper {
        position: absolute;
        width: 410px;
        height: 310px;
      }
    }
  }

  .results {
    position: relative;
    text-align: center;
    margin: 30px auto 0;

    > div {
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin: 0 10px 20px;
    }
  }

</style>
