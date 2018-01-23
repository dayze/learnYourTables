<template>
  <div v-show="start">
    <slot></slot>{{data}}
  </div>
</template>

<script>
  export default {
    name: 'Timer',
    props: {time: {Number}, start: {default: false}},
    data () {
      return {
        data: this.time
      }
    },
    methods: {
      resetTimer () {
        this.data = this.time
      }
    },
    watch: {
      data () {
        if (this.data === 0) {
          this.$emit('timerOver')
          this.resetTimer()
        }
      }
    },
    mounted () {
      window.setInterval(() => {
        if (this.data > 0 && this.start) {
          this.data--
        }
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
