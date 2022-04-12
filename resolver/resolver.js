const resolvers={
    Query:{
        books:()=>[
            {
                id:1,
                name:'Sach loai 1',
                genre:"Tieu Thuyet"
            },
            {
                id:2,
                name:'Sach loai 2',
                genre:"Truyen co tich"
            },
            {
                id:3,
                name:'Sach loai 3',
                genre:"Truyen ngan"
            }
        ]
    }
}
module.exports=resolvers