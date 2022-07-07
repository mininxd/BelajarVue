 const { createApp } = Vue
 createApp({
 	
 //output | dari "data()" ke "}," (line 9)
 data() {
 	return {
 	output:' '
             }
       },
        
        //methods | dari "methods:" ke "}" (line 16)         
       methods: {
    balik() {
      this.output = this.output.split('').reverse().join('')
       }
    }
}).mount('#app')