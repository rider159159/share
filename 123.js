export default {
  auth: false,

  data(){
    return {
      periodText: '2021/01/05 ~ 2022/01/05',
    },
  }
};
export default {
  auth: false,
  data() {
    return{
      carte: {
        greet: '偶四衰哥',
        display_name: 'Ryder',
        avatar: 'http://localhost/images/user-default.png',
      },
      careerData:{
        professional:[
          {id:13,name:'製程'}
        ],
        rank:[
          {id:15,name:'學生'}
        ],
        industry:[
          {
            id:16,
            name:'金融與保險業'
          },
        ],
      },
      config: {
        category_conver:{ professional:'專業領域', industry:'產業別', rank:'職階'},
        cities:['台北市'],
        categories: {
          professional: [
            { id: 1, name: '行銷／公關' },
          ],
          rank: [
            { id: 15, name: '學生' },
          ],
          industry: [
            { id: 16, name: '金融與保險業' },
          ],
        }
      }
    }
  }
};
