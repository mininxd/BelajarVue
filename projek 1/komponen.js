import { createApp } from 'vue'
  

  
  //variabel 
  const app1 = createApp({
 data() {
 	//output
 	return {
       msg:'Hello World',
       msg2:'msg itu message',
      color: 'green',
      togglelist: 'sembunyikan',
      //interger
       angka:0,
       //bollean true≠false
       show: true,
       //array list
      list: [1, 2, 3],
      text: '',
       checked: true,
      checkedNames:[],
      picked: '',
      selected: '',
      multiSelected: ''
    }
      },
      	methods: {
    balik() {
      this.msg = this.msg.split('').reverse().join('')
      this.msg2 = this.msg2.split('').reverse().join('')
    },
    toggleList() {
    	this.togglelist = this.togglelist == 'sembunyikan' ? 'tampilkan' : 'sembunyikan'
},
    //@click=""
    alertbox() {
    	alert(this.msg)
    },
    //@click.prevent=""
    dilarang() {
    	alert('Mau kemana?')
    },
    gantiwarna() {
      this.color = this.color === 'green' ? 'red' : 'green'
    }
    }

})
//variabel di mount ke ID html
app1.mount('#app-test')
