<template>
  <div>
    <div v-if="param==='new'">
      <newComponent />
    </div>
    <div v-else>
    <div class="xd" v-if="data[0]">
      <h1 class="title is-1">{{ data[0].name }}</h1>
      <h1 class="title is-5">{{ data[0].description }}</h1>
    </div>
    <div v-else>
      <h1>no data</h1>
    </div>
    <div v-if="data[0]">
      <h1 class="title-ing is-5">Ingredients:</h1>
      <b-taglist v-for="food in data[0].ingredients" :key="food">
        <b-tag type="is-info"> {{ food }} </b-tag>
      </b-taglist>
      <h1 class="second is-5">Steps:</h1>
      <b-taglist v-for="food in data[0].steps" :key="food">
        <b-tag type="is-success"> {{ food }} </b-tag>
      </b-taglist>
    </div>
    <div v-else>
      <ul>
        <li>no data</li>
      </ul>
    </div>
    <div v-if="data[0]">
      <figure class="image is-128x128">
        <img :src="data[0].url" />
      </figure>
    </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import { db } from '@/plugins/firebase'
import newComponent from '@/components/new'

export default {
  components:{
    newComponent
  },
  data: function () {
    return {
      param: null,
      data: [],
    }
  },
  mounted() {
    this.param = this.$route.params.id
  },
  created() {
    db.collection('przepisy')
      .where('id', '==', parseInt(this.$route.params.id))
      .get()
      .then((snap) => {
        if (snap.empty) {
          console.log('snap empty')
        } else {
          snap.forEach((doqc) => {
       //     console.log(doqc.data())
            this.data.push(doqc.data())
          })
        }
      })
  },
}
</script>

<style scoped>
.tags {
  float: left;
  padding: 15px;
}

.title-ing {
  margin-top: 50px;
}

.second{
  margin-top:100px;
}
</style>
