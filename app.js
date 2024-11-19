const app = Vue.createApp({
    data() {
        return{
            bill:null,
            tip:0,
            people:null,
            total:null,
            tipPorPersona: null,
            totalTipPersona: null
        };
    },

    computed:{
        resultado(){
            if(this.bill && this.people){
                const billMasTip = (this.bill * (this.tip/100) + this.bill)
                this.total=billMasTip / this.people;
                this.totalTipPersona = (this.bill * (this.tip/100)) / this.people
            }
        }
        
    },

});

app.mount('#app');