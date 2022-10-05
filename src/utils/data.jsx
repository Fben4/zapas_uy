

const data = [
    {
        id: 1,
        name:'Air Max 270',
        thumbnail: 'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F270.png?alt=media&token=4e2f7961-5fee-4f85-b527-5d9dc1c6cb5e' ,
        thumbnail_1: 'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fblack270.jpg?alt=media&token=e69c20ba-ece2-4148-8e89-c384a83191ff' ,
        thumbnail_2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fwhite270.jpg?alt=media&token=a2d867ed-093a-40bf-ab0d-97876a191ad6' ,
        promo1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fpromo270_1.png?alt=media&token=cc4ddb68-3c04-446a-b67f-2028da441c27', //vertical
        promo2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F270promo3.png?alt=media&token=3ee3a06b-af3e-44e8-8850-ed0da70f0a51', //horizontal
        promo3:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fpromo270.jpg?alt=media&token=8e1c984b-2abe-4b44-893f-edb560985c70',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est omnis ipsum veritatis placeat suscipit rerum! Labore, facere debitis? Commodi, sint. Officiis atque, libero sequi ducimus consequatur esse quae enim.',
        logo:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fnikelogo.png?alt=media&token=5db2a6f3-03e8-4c36-828e-79978c4450aa',
        brandid:1,
        categoryid:1, // hombre
        sales: 0,
        sizes : [40,41,42,43,44,45],
        cost:5500 ,
        size:0,
        stock:4
    },
    {
        id: 2,
        name:'Air Max 97',
        thumbnail:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fairmax.png?alt=media&token=33a54d76-d4cc-45f3-aa82-53e7336f627f' ,
        thumbnail_1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F97brown.png?alt=media&token=a985d925-db53-4151-a84c-cd629f615104',
        thumbnail_2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F97white.png?alt=media&token=764f2442-c594-487c-9ada-0b9d3839e263',
        promo1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F97vertical.jpeg?alt=media&token=165facde-25f7-4826-823f-27457ed54b92',
        promo2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F97h1.png?alt=media&token=d460bc40-009d-4f96-a094-59c84d5a09c4',
        promo3:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F97h2.jpg?alt=media&token=c1d86f74-816f-4617-b901-e68f1dc36f5b',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est omnis ipsum veritatis placeat suscipit rerum! Labore, facere debitis? Commodi, sint. Officiis atque, libero sequi ducimus consequatur esse quae enim.',
        logo:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fnikelogo.png?alt=media&token=5db2a6f3-03e8-4c36-828e-79978c4450aa',
        brandid:1,
        categoryid:1, 
        sales: 0,
        sizes: [36,37,38,39,40,41,42,43,44,45],
        cost:8000 ,
        size:0,
        stock:3
    },
    {
        id: 3,
        name:'Converse Weapon Hombre',
        thumbnail:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fred.png?alt=media&token=1bf086e1-95a4-4f84-b26f-6b718c041273' ,
        thumbnail_1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fweaponblack.png?alt=media&token=c47f1f58-070b-4e46-a7ab-638bfdae7540',
        thumbnail_2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fweaponvintage.png?alt=media&token=66487c00-e380-424b-95b2-7f6c0d3009ca',
        promo1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fwppromo1.jpg?alt=media&token=c7607690-c917-4c5c-b229-0c45a986c748',
        promo2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fwppromo2.jpg?alt=media&token=c2502783-c155-49f5-8382-5e7fedf41ac2',
        promo3:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fwppromo3.jpg?alt=media&token=3bb306ab-544f-4df4-aa7c-89209964bd68',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est omnis ipsum veritatis placeat suscipit rerum! Labore, facere debitis? Commodi, sint. Officiis atque, libero sequi ducimus consequatur esse quae enim.',
        logo:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fconverselogo.png?alt=media&token=38587184-a0f2-4dc3-984a-ff15f0302176',
        brandid:2,
        categoryid:1, // hombre
        sales: 0,
        cost:9000 ,
        sizes : [40,41,42,43,44,45],
        size:0,
        stock:6
    },
    {
        id: 4,
        name:'Adidas x Bad Bunny', 
        thumbnail:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fbadbunny.png?alt=media&token=a00ea701-1766-44db-adb2-5bdc34796b83' , 
        thumbnail_1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fbadbunybrown.png?alt=media&token=de8e2822-698d-4ada-a75e-2934eafcfe48', //color2
        thumbnail_2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fpinkabdbunny.png?alt=media&token=e2ebdd9d-ccc3-413b-a6c3-ff4d6374527d', //color3
        promo1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fbrownad.jpg?alt=media&token=5462ca10-82aa-4d2e-8d17-9011cdb2dd0e', //vertical
        promo2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fbadbunny.jpg?alt=media&token=9501e242-b0bd-4aa6-9583-7b4a808055c6', //horizontal
        promo3:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fbadbunnyad.jpg?alt=media&token=eb5a3b5a-3010-4447-b9aa-22b3372cd02b', //horizontal
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est omnis ipsum veritatis placeat suscipit rerum! Labore, facere debitis? Commodi, sint. Officiis atque, libero sequi ducimus consequatur esse quae enim.',
        logo:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fadidaslogo.png?alt=media&token=a49180e5-0bcb-4a05-b150-dc871b052dcf',
        brandid:3,
        categoryid:1, // hombre
        sales: 1,
        cost:8000 ,
        sizes : [40,41,42,43,44,45],
        size:0,
        stock:8
    },
    {
        id: 5,
        name:'Vans SK9 Hi',
        thumbnail:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fvanspro.png?alt=media&token=d015cc2a-9908-4b66-b77f-604bd9f1050e' ,
        thumbnail_1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fvanssk8.png?alt=media&token=439ab9fa-1e79-4d34-8dda-004594801c71',
        thumbnail_2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fsk8beige.png?alt=media&token=941e3807-bbf0-40e1-8d1b-b7638e15adc6',
        promo1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fchampiones-vans-sk8-hi-bk-black.jpeg?alt=media&token=6e07b02d-05c9-4cfe-8509-3520800a3335',
        promo2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2FSK8_Hi_Reissue_Zip_Premium_Leather_White_VN0A33T9MXL_3004.jpg?alt=media&token=0405ec75-d7e7-4695-8a87-95da935161af',
        promo3:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2FVans-triple-black-4.jpeg?alt=media&token=d2c1c576-95fb-467f-9b48-5fbba15eea09',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est omnis ipsum veritatis placeat suscipit rerum! Labore, facere debitis? Commodi, sint. Officiis atque, libero sequi ducimus consequatur esse quae enim.',
        logo:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fvanslogo.png?alt=media&token=007cafbc-b6f5-4771-a625-ca97d6d3573a',
        brandid:4,
        categoryid:2, 
        sales: 0,
        cost:6000 ,
        sizes : [40,41,42,43,44,45],
        size:0,
        stock:7
    },
    {
        id: 6,
        name:'Puma Wild Rider',
        thumbnail:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fwildrider.png?alt=media&token=8306d733-b2d2-4a24-8ba4-bdde6bcbf9cd' ,
        thumbnail_1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Friderblack.png?alt=media&token=49e99a58-7cf0-464d-be2c-81f30c24f43f',
        thumbnail_2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Friderblue.png?alt=media&token=2dafbbc5-8e0d-4725-b6e0-f5b8ba5e3ff3',
        promo1:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fhttps___hypebeast.com_image_2021_04_puma-wild-rider-sneaker-release-information-002.jpg?alt=media&token=641d16a6-bc74-4bc8-b8ec-3e9a7e623646',
        promo2:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fpuma-wild-rider-layers-tss1_w1160.png?alt=media&token=f801da8b-bc17-410d-9b7d-a4393e17013c',
        promo3:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fpumafeature.jpg?alt=media&token=9f48e7a4-3eee-4b82-b52a-d323d7403094',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est omnis ipsum veritatis placeat suscipit rerum! Labore, facere debitis? Commodi, sint. Officiis atque, libero sequi ducimus consequatur esse quae enim.',
        logo:'https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fpumalogo.png?alt=media&token=2dd110aa-f29d-4f82-9507-d3a4d9c6b369',
        brandid:5,
        categoryid:2, 
        sales: 3,
        sizes : [39,40,41,42,43,44,45],
        cost:7000 ,
        size:0,
        stock:4
    }
]

export default data;