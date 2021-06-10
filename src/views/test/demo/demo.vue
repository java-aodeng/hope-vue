<template>
  <div>
    <div class="components-container">

      <h3>富文本编辑器 Tinymce组件</h3>

      <div>
        <tinymce v-model="content" :height="300"/>
      </div>
      <div class="editor-content" v-html="content"></div>

      <h3>BarChart 组件</h3>

      <bar-chart />

    </div>
  </div>
</template>

<script>
import demo from './demo.js'
export default demo
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>

