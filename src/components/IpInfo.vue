<template>
    <div class="container-fluid">
        <div class="row">

            <div class="col-md-12 col-xs-12 col-12 text-left">
                <label>IP Address</label>
            </div>
            <div class="col-md-8 col-xs-12 col-12">
                <input v-model="ip" type="text" class="form-control" placeholder="Query IP/Domain">
            </div>
            <div class="col-md-4 col-xs-12 col-12">
                <button :disabled="loading" v-on:click="getIpData()" class="btn btn-primary btn-block search-ip-button">
                    Search <i class="fa fa-search"></i>
                </button>
            </div>

            <template v-if="showInfo">
                <div class="col-md-5 col-xs-12 col-12">
                    <ul class="list-group text-left ip-list">
                        <li v-bind:key="index" v-for="(value, key, index) in ipData" class="list-group-item">
                            {{key}}: {{value}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 col-xs-12 col-12">
                    <Map :lat="ipData.lat" :lon="ipData.lon"/>
                </div>
            </template>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Map from './Map.vue'

export default {
  name: 'IpInfo',
  components: {
      Map
  },
  data: function(){
      return {
          ip: null,
          ipData: {},
          showInfo: false,
          loading: false,
      }
  },
  methods: {
        getIpData(){
            this.loading = true;
            axios.get('http://ip-api.com/json/' + this.ip)
            .then(response => {
                this.ipData = response.data;
                if(this.ipData.status == "success"){
                    this.$notification.success("Request completed successfully.");
                    this.showInfo = true;
                }else{
                    this.$notification.warning(this.ipData.message);
                    this.showInfo = false;
                }
            })
            .catch(e => {
                this.errors.push(e);
                this.$notification.error("There was an error in the request. Please try again later.");
                this.showInfo = false;
            })
            .then(() => {
                this.loading = false;
            });
        }
  }
}
</script>