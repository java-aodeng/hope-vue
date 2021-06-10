import Tinymce from '@/components/Tinymce'
import BarChart from './components/BarChart'

export default {
  name: 'Demo',
  components: {Tinymce,BarChart},
  data() {
    return {
      content: `编辑内容...`,
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
