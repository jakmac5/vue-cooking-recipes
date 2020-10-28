<template>
  <section class="section">
<div class="columns is-mobile" v-for="(item,index) in chunkedLogos" :key='index'>
      <!--
      <div class="is-clickable" @click="steak()">
        <card title="Steak" :icon="require('@/assets/food (4).svg')">
          <b class="has-text-grey">Spicy </b> with wegetables and mushrooms
        </card>
      </div>
      <div class="is-clickable" @click="pumpkin()">
        <card title="Pumpkin soup" :icon="require('@/assets/food (1).svg')">
          <b class="has-text-grey"> Halloween </b> perfect food
        </card>
      </div>
      <div class="is-clickable" @click="Bruschetta()">
        <card title="Bruschetta" :icon="require('@/assets/food (2).svg')">
          Try this with friends
        </card>
      </div>
      <div class="is-clickable" @click="salad()">
        <card title="Oriental salad" :icon="require('@/assets/food (3).svg')">
          Sour and Spicy
        </card>
      </div>
      -->
      <div
        class="is-clickable"
        v-for="(query, index) in item"
        :key="index"
        @click="goTo(query.id)"
      >
        <card v-if="!query.url" :title="query.name" :icon="require('@/assets/food (4).svg')">          {{ query.description }}
        </card>
        <card v-else :title="query.name" :icon="query.url">
          {{ query.description }}
        </card>
      </div>
    </div>
  </section>
</template>

<script>
/*eslint-disable */

import { db } from '@/plugins/firebase'
import Card from '@/components/Card.vue'
import _ from 'lodash';


export default {
  name: 'HomePage',
  data: function () {
    return {
      data: [],
    }
  },
  components: {
    Card,
  },
  methods: {
    goTo(id) {
      location.href = `/recipe/${id}`
    },
    steak() {
      location.href = '/recipe/1'
    },
    pumpkin() {
      location.href = '/recipe/2'
    },
    Bruschetta() {
      location.href = '/recipe/3'
    },
    salad() {
      location.href = '/recipe/4'
    },
  },
  created() {
    db.collection('przepisy')
      .get()
      .then((snap) => {
        if (snap.empty) {
          console.log('snap empty')
        } else {
          snap.forEach((doqc) => {
  //          console.log(doqc.data())
            this.data.push(doqc.data())
          })
        }
      })
  },
      computed: {
  chunkedLogos() {
    return _.chunk(this.data, 4)
  },
}
}
</script>

<style scoped>
.is-clickable {
  cursor: pointer;
}


</style>
