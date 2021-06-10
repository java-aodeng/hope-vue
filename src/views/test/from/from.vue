<template>
  <div>
    <el-button type="primary" @click="handelConfirm2">确定111</el-button>

    <el-dialog :visible.sync="open" v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                    prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="级联选择" prop="field103">
          <el-cascader v-model="formData.field103" :options="field103Options" :props="field103Props"
                       :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
        </el-form-item>
        <el-form-item label="单选框组" prop="field105">
          <el-radio-group v-model="formData.field105" size="medium">
            <el-radio v-for="(item, index) in field105Options" :key="index" :label="item.value"
                      :disabled="item.disabled">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="多选框组" prop="field104">
          <el-checkbox-group v-model="formData.field104" size="medium">
            <el-checkbox v-for="(item, index) in field104Options" :key="index" :label="item.value"
                         :disabled="item.disabled">{{item.label}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="下拉选择" prop="field106">
          <el-select v-model="formData.field106" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
            <el-option v-for="(item, index) in field106Options" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择" prop="field108">
          <el-time-picker v-model="formData.field108" format="HH:mm:ss" value-format="HH:mm:ss"
                          :picker-options='{"selectableRange":"00:00:00-23:59:59"}' :style="{width: '100%'}"
                          placeholder="请选择时间选择" clearable></el-time-picker>
        </el-form-item>
        <el-form-item label="计数器" prop="field112">
          <el-input-number v-model="formData.field112" placeholder="计数器"></el-input-number>
        </el-form-item>
        <el-form-item label="评分" prop="field109">
          <el-rate v-model="formData.field109"></el-rate>
        </el-form-item>
        <el-form-item label="日期选择" prop="field107">
          <el-date-picker v-model="formData.field107" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                          :style="{width: '100%'}" placeholder="请选择日期选择" clearable></el-date-picker>
        </el-form-item>
        <el-form-item label="上传" prop="field110" required>
          <el-upload ref="field110" :file-list="field110fileList" :action="field110Action"
                     :before-upload="field110BeforeUpload">
            <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="开关" prop="field103" required>
          <el-switch v-model="formData.field103"></el-switch>
        </el-form-item>
        <el-form-item label="颜色选择" prop="field111" required>
          <el-color-picker v-model="formData.field111" size="medium"></el-color-picker>
        </el-form-item>
        <el-form-item label="按钮" prop="field101">
          <el-button type="primary" icon="el-icon-search" size="medium"> 主要按钮 </el-button>
        </el-form-item>
        <el-form-item label="滑块" prop="field102" required>
          <el-slider :max='100' :step='1' v-model="formData.field102"></el-slider>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name:"From",
  inheritAttrs: false,
  components: {},
  props: [],
  data() {
    return {
      open:false,
      formData: {
        mobile: '',
        field103: [1, 2],
        field105: 1,
        field104: [],
        field106: undefined,
        field108: '17:40:51',
        field112: 1,
        field109: 2,
        field107: null,
        field110: null,
        field1033: false,
        field111: null,
        field101: undefined,
        field102: 49,
      },
      rules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        field103: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field103',
          trigger: 'change'
        }],
        field105: [{
          required: true,
          message: '单选框组不能为空',
          trigger: 'change'
        }],
        field104: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field104',
          trigger: 'change'
        }],
        field106: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
        field108: [{
          required: true,
          message: '请选择时间选择',
          trigger: 'change'
        }],
        field112: [{
          required: true,
          message: '计数器',
          trigger: 'blur'
        }],
        field109: [{
          required: true,
          message: '评分不能为空',
          trigger: 'change'
        }],
        field107: [{
          required: true,
          message: '请选择日期选择',
          trigger: 'change'
        }],
      },
      field110Action: 'https://jsonplaceholder.typicode.com/posts/',
      field110fileList: [],
      field103Options: [],
      field105Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field104Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field106Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field103Props: {
        "multiple": false
      },
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs['elForm'].resetFields()
      this.open=false;
    },
    close() {
      this.open=false;
    },
    handelConfirm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        this.close()
      })
    },
    handelConfirm2() {
      this.msgSuccess("成功");
      this.msgSuccessNotify("成功");
      this.open=true;
    },
    getField103Options() {
      // TODO 发起请求获取数据

    },
    field110BeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 2
      if (!isRightSize) {
        this.$message.error('文件大小超过 2MB')
      }
      return isRightSize
    },
  }
}

</script>
<style>
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}

.el-upload__tip {
  line-height: 1.2;
}

</style>
