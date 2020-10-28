<template>
  <div>
    <h1 class="title is-1">Add your best cooking recipes!</h1>

    <section class="input-field">
      <b-field>
        <b-input v-model="name" placeholder="Name"></b-input>
      </b-field>

      <b-field>
        <b-input v-model="url" placeholder="URL" type="url"></b-input>
      </b-field>

      <b-field>
        <b-input
          v-model="description"
          placeholder="DescriptionShort description"
        ></b-input>
      </b-field>

      <b-field label="Ingredients">
        <b-taginput v-model="ingredients" type="is-success"> </b-taginput>
      </b-field>

      <b-field label="Steps">
        <b-taginput v-model="steps" type="is-dark"> </b-taginput>
      </b-field>

      <div class="buttons">
        <b-button type="is-primary" expanded @click="submit()"
          >Upload youur recipe!</b-button
        >
      </div>
    </section>
  </div>
</template>

<script>
/*eslint-disable */

import { db } from '@/plugins/firebase'

export default {
  data() {
    return {
      name: '',
      url: '',
      description: '',
      steps: ['step 1', 'step 2'],
      ingredients: ['Chilli', 'Lime'],
      id: null,
    }
  },
  watch: {
    id: function (newVal, oldVal) {
      if (newVal !== null) {
        location.href = `/recipe/${newVal}`
      }
    },
  },
  methods: {
    submit() {
      if (
        this.name === '' ||
        this.steps[0] === '' ||
        this.ingredients[0] === ''
      ) {
        alert('name, steps and ingredients are required')
      } else {
        db.collection('przepisy')
          .get()
          .then((snap) => {
            db.collection('przepisy').add({
              name: this.name,
              url: this.url,
              description: this.description,
              steps: this.steps,
              ingredients: this.ingredients,
              id: snap.size + 1,
            })
            this.id = snap.size + 1
          })
      }
    },
  },
}
</script>

<style scoped>
.input-field {
  margin-top: 50px;
}

.title {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>
