 const { createApp } = Vue
 createApp({
 data() {
 	//output 
 	return {
 	output:' '
 }
       },
       
       methods: {
    balik() {
      this.output = this.output.split('').reverse().join('')
   }
}
}).mount('#app')