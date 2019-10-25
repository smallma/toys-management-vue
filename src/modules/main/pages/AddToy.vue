<template>
  <div class="add_toy">
    <a-form :form="form" @submit="handleSubmit">

      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          {{ $t('message.add.name') }}
        </span>
        <a-input
          v-decorator="[
            'nickname',
            {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            },
          ]"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" :label="$t('message.add.num')">
        <a-input-number v-decorator="['num', { initialValue: 1 }]" :min="1" :max="99" />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" :label="$t('message.add.rarity')">
        <a-rate v-decorator="['rate', { initialValue: 4 }]" allow-half />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" :label="$t('message.add.buyDate')">
        <a-date-picker style="width: 100%"
          v-decorator="[
            'buyDate'
          ]"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" :label="$t('message.add.buyPrice')">
        <a-input
          v-decorator="[
            'buyPrice',
            {
              rules: [{ required: true }],
            },
          ]"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          {{$t('message.add.currentPrice')}}
        </span>
        <a-input
          v-decorator="[
            'currentPrice'
          ]"
        />
      </a-form-item>

      <a-form-item v-bind="formItemLayout" :label="$t('message.add.tags')">
        <a-select
          v-decorator="[
            'tags',
            {
              rules: [
                { required: true, type: 'array' },
              ],
            },
          ]"
          mode="multiple"
          placeholder="Please select favourite colors"
        >
          <a-select-option value="zoids">{{ $t('message.nav.zoids')}}</a-select-option>
          <a-select-option value="zoidsKotobukiya">{{ $t('message.nav.zoidsKotobukiya')}}</a-select-option>
          <a-select-option value="zoidsTT">{{ $t('message.nav.zoidsTT')}}</a-select-option>
          <a-select-option value="kachaball">{{ $t('message.nav.kachaball')}}</a-select-option>
          <a-select-option value="mononofu">{{ $t('message.nav.mononofu')}}</a-select-option>
          <a-select-option value="mononofu3">{{ $t('message.nav.mononofu3')}}</a-select-option>
          <a-select-option value="mononofu4">{{ $t('message.nav.mononofu4')}}</a-select-option>
          <a-select-option value="mononofu5">{{ $t('message.nav.mononofu5')}}</a-select-option>
          <a-select-option value="mononofu6">{{ $t('message.nav.mononofu6')}}</a-select-option>
          <a-select-option value="mononofu7">{{ $t('message.nav.mononofu7')}}</a-select-option>
          <a-select-option value="mononofu8">{{ $t('message.nav.mononofu8')}}</a-select-option>
          <a-select-option value="swordghost1">{{ $t('message.nav.swordghost1')}}</a-select-option>
          <a-select-option value="swordghost2">{{ $t('message.nav.swordghost2')}}</a-select-option>
          <a-select-option value="swordghost3">{{ $t('message.nav.swordghost3')}}</a-select-option>
          <a-select-option value="sango1">{{ $t('message.nav.sango1')}}</a-select-option>
          <a-select-option value="sango2">{{ $t('message.nav.sango2')}}</a-select-option>
          <a-select-option value="sango3">{{ $t('message.nav.sango3')}}</a-select-option>
          <a-select-option value="godzilla">{{ $t('message.nav.godzilla')}}</a-select-option>
          <a-select-option value="xplus">{{ $t('message.nav.xplus')}}</a-select-option>

        </a-select>
      </a-form-item>

      <a-form-item
        v-bind="formItemLayout"
        :label="$t('message.add.uploadImg')"
      >
        <a-upload
          v-decorator="[
            'upload',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="logo"
          list-type="picture"
        >
          <a-button> <a-icon type="upload" /> {{$t('message.add.clickToUpload')}} </a-button>
        </a-upload>
      </a-form-item>


      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit">
          {{$t('message.add.add')}}
        </a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<script>

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

export default {
  name: 'AddToy',
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'dynamic_rule' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          console.info('success', values.tags);
          window.values = values;
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>



<style lang="scss" scoped>
.add_toy {
  margin: 50px auto;
  width: 100%;
  max-width: 780px;
}
</style>
