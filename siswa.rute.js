const  router  =  memerlukan ( "ekspres" ) . Perute ( ) ;
const  controller  =  memerlukan ( "../controllers/"  +  "siswa"  +  ".controllers" ) ;
router
  . dapatkan ( "/" ,  pengontrol . getAllStudent )
  . dapatkan ( "/:id" ,  pengontrol . getOneStudent )
  . posting ( "/" ,  pengontrol . createOneStudent )
  . put ( "/:id" ,  pengontrol . updateOneStudent )
  . delete ( "/:id" ,  pengontrol . deleteOneStudent ) ;
modul . ekspor  =  perute ;