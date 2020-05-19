<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-8 col-xs-12 col-12">
          <h1>See information about an IP or Domain</h1>
          <IpInfo/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IpInfo from './components/IpInfo.vue'

export default {
  name: 'App',
  components: {
    IpInfo
  }
}
</script>
