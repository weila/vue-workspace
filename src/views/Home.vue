<template>
  <div class="home">
    <h1>vue-workspace</h1>
    <img :src="image" alt="">
  </div>
</template>

<script>
import image from '@images/image.png'
import { commonPost } from '@api/data'
export default {
  name: "Home",
  data() {
    return {
      image: image,
    }
  },
  components: {
   
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      let data = {}
      data.url = "/api/GetDeptInfo"
      data.payload = {
        "BeginDate": "",
        "EndDate": "",
        "KeyWord": "",
        "PDeptId": ""
      }
      commonPost(data).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
