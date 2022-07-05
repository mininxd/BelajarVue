import { createApp } from 'vue'
  

  
  //variabel 
  const aplikasi = createApp({
 data() {
 	//output 
 	return {
 	//string
       msg:'Hello World',
       msg2:'msg itu message',
      color: 'green',
      togglelist: 'sembunyikan',
      namamu: '',
      terpilih: '',
      selected: '',
      multiSelected: '',
      
      //interger
       angka:0,
       
       //bollean true false
       checked: true,
       show: true,
       
       //array list
      list: [1, 2, 3],
      cheatCode:[]
    }
      },
      //methods = metode
      	methods: {
      	//tombol putar balik teks
    balik() {
      this.msg = this.msg.split('').reverse().join('')
      this.msg2 = this.msg2.split('').reverse().join('')
    },
    //tombol sembunyi dan tampilkan di UL 
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
    //@click
    gantiwarna() {
      this.color = this.color === 'green' ? 'red' : 'green'
    }
    }

})
//variabel di mount ke ID <div>
aplikasi.mount('#app-test')
